## Video : https://youtu.be/mg3x-43M5iM

## Demo : https://coopart.io

## About Coopart

**Coopart** [ koh-op-ahrt ] is the first-ever cooperative NFT art marketplace. 
1. Create a canvas and add the first tile.
2. Other artists expand the canvas in any direction and add new tiles.
3. People can vote tiles in or out. Each canvas is its own DAO and self-governs. Some tiles are voted out and some tiles are voted in to replace them.
4. Canvas is sold and profits distributed to all its contributors.

## Inspiration

I first got the idea to create Coopart from looking at the [$69 million Beeple's NFT](https://www.theverge.com/2021/3/11/22325054/beeple-christies-nft-sale-cost-everydays-69-million). The piece of art is made from 5,000 tiles merged together into a common canvas. I thought it would be great if each tile was made by a different author, and so Coopart was born. Many artists can contribute tiles to a common canvas that is then sold as a single piece, and profits are shared between all of them.

## Try it out

### Getting started

The platform is live at [coopart.io](https://coopart.io) and running on the _Florence Testnet_. I coded the smart contract in _Cameligo_ and the frontend in _React_ integrated with the _Temple_ wallet. Before trying out the platform, make sure you have a funded account on the _Florence_ Testnet_. You can use faucet account from [tzalpha](https://faucet.tzalpha.net/). 

Now, on Coopart, click _Connect wallet_ and _Temple_ will open to ask you for authorization. Your Tez address should then appear in the top right corner.

### Create a new canvas

You are now ready to create a new canvas or contribute to the existing canvases. If you click _Create New Canvas_, you can choose between tile-based canvas and layer-based canvas. If you choose tile-based, you'll see the tile editor with an empty tile and a few options. First, choose a tile size. Note that all tiles in a canvas will have the same size, even for other contributors. You can also select the time period for other artists to contribute to the canvas. After that, the canvas will automatically lock and be put on sale, meaning that no more contribution will be possible.

Hover your mouse over any tile to see its coordinates and an upload button. You can click the arrows to expand the canvas in any direction. There is no limit to the canvas size, this could technically scale to millions of tiles. Click _Upload_ and choose an image file. Wait while the tile is uploading. I am using **IPFS** to store the NFT images and metadata, so it is fully decentralized and tile owners can be reassured that their art is stored safely forever.

Once the image is uploaded, it appears in the tile you chose. Then a Tezos transaction to mint the tile is automatically started. I am using the **FA2 Token Standard** in the smart contract to store the tiles as NFTs and comply with transfer and storage conventions. This makes Coopart compatible with all wallets, exchanges, DeFi dapps, etc. on Tezos.

Click confirm to start the minting transaction. A notification in the top right corner tells you that the transaction has been sent. Wait a few seconds, and another notification will tell you that the tile has been minted. You can check out [tzkt.io](https://florencenet.tzkt.io/KT1Uh5vynfwspSRhDvaBprxa3vLbHToG1gqT/operations/) to confirm that the transaction is indeed successful. This canvas is now officially started. You can add more tiles yourself or wait for others to contribute. 

### Contribute to existing canvas

Head over to the marketplace to see all ongoing canvases that still have time left in their contribution period and canvases that have expired and have automatically been put on sale. You should see the canvas you just created with one tile. Click any ongoing canvases and the tile editor will open and fetch the tiles from the smart contract. Expand the canvas in any direction and contribute one or more tiles. When you are done refresh the marketplace to see the updated canvas.

### Vote on tiles

Now, what if someone ruins a canvas with an inappropriate tile? That's where voting comes into play. Anyone can vote on each tile. If they believe a tile should not be in a canvas, they can downvote it to remove it. On the contrary, if they believe a tile is a perfect match for the canvas, they can upvote it to keep it. **Each canvas is its own DAO and self-govern.** If a tile has more downvotes than upvotes, it is removed automatically. A new tile can then be created in its place.

### Buy/Sell canvas

Once the contribution period of a canvas expires, no one can contribute to it anymore, and it is automatically put on sale in the marketplace. You can click _Buy Canvas_ and submit the transaction. After a few seconds, the token will appear in your wallet.

When a canvas is purchased, all the tile creators (except those that were voted out) are paid according to the number of tiles they contributed. E.g., if a canvas has 10 tiles and is sold for 1 Tez, each tile creator will receive 0.1 Tez. If someone contributed 2 tiles to that canvas, he would receive 0.2 Tez.

## Layer-based canvas

I have also created another kind of cooperative art based on layers intead of tiles. Create a new canvas and choose _layer-based_. Choose a canvas size and a deadline. All layers will have the same size. Add a first layer and other artists can add more layers. A layer must typically be transparent to show the previous layers but add some elements to it (see video demo an example).

## Conclusion

Coopart is a revolutionary way of building NFT art cooperatively. Both tile-based canvas and layer-based canvas will lead to exceptional artistic pieces from thousands of artists working together and maybe worth millions.



----------------------------

## Video script

**Coopart** [ koh-op-ahrt ] is the first-ever cooperative NFT art marketplace. 
1- Create a canvas and add the first tile.
2- Other artists expand the canvas in any direction and add new tiles.
3- People can vote tiles in or out. Each canvas is its own DAO and self-governs. Some tiles are voted out and some tiles are voted in to replace them.
4- Canvas is sold and profits distributed to all its contributors.

I first got the idea for Coopart from looking at the 69 million Beeple's NFT. The piece of art is made from 5,000 tiles merged together into a common canvas. I thought it would be great if each tile was made by a different author, and so Coopart was born. 

Let's try it out. Go to coopart.io and and connect your Temple wallet. Make sure your wallet is connected to the _Florence Testnet_. Once you are connected, your Tez address should then appear on the top right corner.

You are now ready to create a new canvas or contribute to existing canvases. 

Let's start by clicking _Create New Canvas_. There you can choose between tile-based canvas or layer-based canvas. Let's start with tile-ased. You can now see an empty tile and a few options. First, choose a tile size. Note that all tiles in a canvas will have the same size, even for other contributors. Let's choose 130 pixels by 340 pixels. You can also select the time period for other artists to contribute to the canvas. Let's choose a deadline 3 days from now. After that, the canvas will automatically lock and be put on sale, meaning that no more contribution will be possible.

Now hover your mouse over the tile to see its coordinates and an upload button. You can click the arrows to expand the canvas on the right side, left side, top side or bottom side. There is no limit to the canvas size, this could technically scale to millions of tiles. Let's upload a first tile.
I am using **IPFS** to store the NFT images and token metadata, so it is fully decentralized and tile owners can be reassured that their art is safely stored forever.

Once the image is uploaded, it appears in the tile you chose. A transaction to mint the tile is automatically started. Accept it to mint the tile as an FA2 token in the smart contract. This canvas is now officially started. You can add more tiles yourself or wait for others to contribute. 

Let's now go to the marketplace. Here you can see ongoing canvases that still have time left in their contribution period and canvases that have expired and have automatically been put on sale. You can see the canvas we just created with one tile. Let's say I'm another artist that want to contribute to this canvas. I can click "Contribute" and the tile editor will open and fetch the tiles from the smart contract. Let me now add two new tiles to this canvas.

[...]

I am now done contributing. If I reload the marketplace, I can see that the canvas does display the new tiles.

Let's contribute to another canvas. Here I can see tiles are about typical rage comics. However there is a tile that does not seem to fit the theme of the canvas. In that case, I can vote this tile to be removed. Each canvas is its own DAO and self-governs. You can click upvote or downvote on each tile, and those with more downvotes than upvotes will be removed automatically.

Now, once the contribution period of a canvas expires, no one can contribute to it anymore, and it is automatically put on sale in the marketplace. For now, I've only implemented a simple fixed price sale at 1 Tez as a proof of concept, but I plan on developping a more complex auction system soon. When a canvas is purchased, all the tile creators (except those that were voted out) are paid according to the number of tiles they contributed. For instance, if a canvas has 10 tiles and is sold for 1 Tez, each tile creator will receive 0.1 Tez. If someone contributed 2 tiles to that canvas, he would receive 0.2 Tez.

Finally let's check out the layer-based canvas right there. This is another form of cooperative art where each artist adds a layer that is mostly transparent to show the previous layer but adds some new elements to it. For instance, here we some background then someone added a layer with a triangle, a layer with a grid and a layer with some rocks. On the right, we can see the final result. Let's now add another layer. Here I have a an image with a single person. Let me upload it. [...] It then appears on the list of layers and on the final result. I can now mint the layer to add it to the smart contract.

Coopart is a revolutionary way of building NFT art cooperatively. Both tile-based and layer-based art will lead to new and exceptional pieces from thousands of artists working together, and maybe one day worth millions. Thanks for watching.
