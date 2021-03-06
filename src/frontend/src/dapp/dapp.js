import { TempleWallet } from '@temple-wallet/dapp'
import constate from 'constate'
import React from 'react'
import { useAlert } from 'react-alert'

export const [DAppProvider, useWallet, useTezos, useAccountPkh, useReady, useConnect] = constate(
  useDApp,
  (v) => v.wallet,
  (v) => v.tezos,
  (v) => v.accountPkh,
  (v) => v.ready,
  (v) => v.connect,
)

function useDApp({ appName }) {
  const [{ wallet, tezos, accountPkh }, setState] = React.useState(() => ({
    wallet: undefined,
    tezos: undefined,
    accountPkh: undefined,
  }))
  const alert = useAlert()

  const ready = Boolean(tezos)

  React.useEffect(() => {
    return TempleWallet.onAvailabilityChange((available) => {
      setState({
        wallet: available ? new TempleWallet(appName) : undefined,
        tezos: undefined,
        accountPkh: undefined,
      })
    })
  }, [setState, appName])

  const connect = React.useCallback(
    async (network, opts) => {
      try {
        if (!wallet) {
          throw new Error('Temple Wallet not available')
        }
        await wallet.connect(network, opts)
        const tzs = wallet.toTezos()
        const pkh = await tzs.wallet.pkh()
        setState({
          wallet,
          tezos: tzs,
          accountPkh: pkh,
        })
      } catch (err) {
        alert.show(err.message)
        console.error(`Failed to connect TempleWallet: ${err.message}`)
      }
    },
    [alert, setState, wallet],
  )

  return {
    wallet,
    tezos,
    accountPkh,
    ready,
    connect,
  }
}

export function useOnBlock(tezos, callback) {
  const blockHashRef = React.useRef()

  React.useEffect(() => {
    if (tezos) {
      let sub
      spawnSub()
      return () => sub.close()

      function spawnSub() {
        sub = tezos.stream.subscribe('head')

        sub.on('data', (hash) => {
          if (blockHashRef.current && blockHashRef.current !== hash) {
            callback(hash)
          }
          blockHashRef.current = hash
        })
        sub.on('error', (err) => {
          if (process.env.NODE_ENV === 'development') {
            console.error(err)
          }
          sub.close()
          spawnSub()
        })
      }
    }
  }, [tezos, callback])
}

/*
// From https://raw.githubusercontent.com/madfish-solutions/counter-dapp/master/src/dapp.js

import React from 'react';
import constate from 'constate';
import { TempleWallet } from '@temple-wallet/dapp';

export const [
  DAppProvider,
  useWallet,
  useTezos,
  useAccountPkh,
  useReady,
  useConnect,
] = constate(
  useDApp,
  (v) => v.wallet,
  (v) => v.tezos,
  (v) => v.accountPkh,
  (v) => v.ready,
  (v) => v.connect
);

function useDApp({ appName }) {
  const [{ wallet, tezos, accountPkh }, setState] = React.useState(() => ({
    wallet: null,
    tezos: null,
    accountPkh: null,
  }));

  const ready = Boolean(tezos);

  React.useEffect(() => {
    return TempleWallet.onAvailabilityChange(async (available) => {
      if (available) {
        let perm;
        try {
          perm = await TempleWallet.getCurrentPermission();
        } catch {}

        const wlt = new TempleWallet(appName, perm);
        setState({
          wallet: wlt,
          tezos: wlt.connected ? wlt.toTezos() : null,
          accountPkh: wlt.connected ? await wlt.getPKH() : null,
        });
      } else {
        setState({
          wallet: null,
          tezos: null,
          accountPkh: null,
        });
      }
    });
  }, [appName, setState]);

  React.useEffect(() => {
    if (wallet && wallet.connected) {
      return TempleWallet.onPermissionChange((perm) => {
        if (!perm) {
          setState({
            wallet: new TempleWallet(appName),
            tezos: null,
            accountPkh: null,
          });
        }
      });
    }
  }, [wallet, appName, setState]);

  const connect = React.useCallback(
    async (network, opts) => {
      try {
        if (!wallet) {
          throw new Error('Temple Wallet not available');
        }
        await wallet.connect(network, opts);
        const tzs = wallet.toTezos();
        const pkh = await tzs.wallet.pkh();
        setState({
          wallet,
          tezos: tzs,
          accountPkh: pkh,
        });
      } catch (err) {
        alert(`Failed to connect TempleWallet: ${err.message}`);
      }
    },
    [setState, wallet]
  );

  return {
    wallet,
    tezos,
    accountPkh,
    ready,
    connect,
  };
}

export function useOnBlock(tezos, callback) {
  const blockHashRef = React.useRef();

  React.useEffect(() => {
    let sub;
    spawnSub();
    return () => sub.close();

    function spawnSub() {
      sub = tezos.stream.subscribe('head');

      sub.on('data', (hash) => {
        if (blockHashRef.current && blockHashRef.current !== hash) {
          callback(hash);
        }
        blockHashRef.current = hash;
      });
      sub.on('error', (err) => {
        if (process.env.NODE_ENV === 'development') {
          console.error(err);
        }
        sub.close();
        spawnSub();
      });
    }
  }, [tezos, callback]);
}

*/