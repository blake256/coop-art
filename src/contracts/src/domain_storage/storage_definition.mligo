#if !FA2_TLD_DEF_TOKEN
#define FA2_TLD_DEF_TOKEN

#include "marketplace_definition.mligo"
#include "../tzip-12/lib/fa2_operator_lib.mligo"

type marketplace_storage = {
  admin: address;
  sales: sale set;
  tiles: tiles;
  tileIds: token_id set;
  owners: owners;
}

type ledger = (token_id, address) big_map

type nft_token_storage = {
  ledger : ledger;
  operators : operator_storage;
  metadata: contract_metadata;
  market : marketplace_storage;
  token_metadata: token_metadata_storage;
}

#endif