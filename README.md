## About Coopart

**Coopart** [ koh-op-ahrt ] is the first-ever cooperative tile-based NFT art marketplace. 
1- Create a canvas and add the first tile.
2- Other artists expand the canvas in any direction and add new tiles.
3- People can vote tiles in or out. Each canvas is its own DAO and self-governs. Some tiles are voted out and some tiles are voted in to replace them.
4- Canvas is sold and profits distributed to all its contributors.

## Inspiration

I first got the idea to create Coopart from looking at the [$69 million Beeple's NFT](https://www.theverge.com/2021/3/11/22325054/beeple-christies-nft-sale-cost-everydays-69-million). The piece of art is made from 5,000 tiles merged together into a common canvas. I thought it would be great if each tile was made by a different author, and so Coopart was born. Many artists can contribute tiles to a common canvas that is then sold as a single piece, and profits are shared between all of them.

## Try it out

### Getting started

The platform is live at [coop.art](https://coop.art) and running on the _Matic Mumbai Testnet_. I coded the smart contract in Solidity and integrated the frontend with IPFS for token metadata upload and storage. Before trying out the platform, make sure you have a funded account on the _Mumbai Testnet_. You can use the Matic faucet at [faucet.matic.network](https://faucet.matic.network/). 

Now, on Coopart, click _Connect wallet_ and Metamask will open to ask you for authorization. Your Eth address should then appear in the top right corner.

### Create a new canvas

You are now ready to create a new canvas or contribute to the existing canvases. Let's start by clicking _Create New Canvas_. You can see an empty tile and a few options. First, choose a tile size. Note that all tiles in a canvas will have the same size, even for other contributors. Let's choose 130 pixels by 340 pixels. You can also select the time period for other artists to contribute to the canvas. Let's choose 3 days. After that, the canvas will automatically lock and be put on sale, meaning that no more contribution will be possible.

Now hover your mouse over the tile to see its coordinates and an upload button. You can click the arrows to expand the canvas on the right side, left side, top side or bottom side. There is no limit to the canvas size, this could technically scale to millions of tiles. Let's upload a first tile at coordinates (0,0). This not mandatory, you could start at (-1, 2) if you wanted to. Click _Upload_ and choose an image file. Wait while the tile is uploading. I am using **IPFS** with _Infura_ to store the NFT images and metadata, so it is fully decentralized and tile owners can be reassured that their art is stored safely forever.

Once the image is uploaded, it appears in the tile you chose. Then a Polygon transaction to mint the tile is automatically started. I am using the **ERC 721 Token Standard** in the smart contract to store the tiles as NFTs and comply with transfer and storage conventions. This makes Coopart compatible with all wallets, exchanges, DeFi dapps, etc. on Polygon.

Click confirm to start the minting transaction. A notification in the top right corner tells you that the transaction has been sent. Wait a few seconds, and another notification will tell you that the tile has been minted. You can check out [PolygonScan](https://mumbai.polygonscan.com/address/0xaa71521b33f97cf7466519025bc6d60f55b9dd44) to confirm that the transaction is indeed successful. This canvas is now officially started. You can add more tiles yourself or wait for others to contribute. 

### Contribute to existing canvas

Let's now refresh the page and connect with another Eth account to simulate another user. Click _Marketplace_ and wait a few seconds for all canvas and tiles to load from the smart-contract's storage. Here you can see on-going canvases that still have time left in their contribution period and canvases that have expired and have automatically been put on sale. You can see the canvas we just created with one tile. Let's click it. The tile editor opens and fetches the tiles from the smart contract. Wait until the loading status in the top right corner disappears. Let me now expand the canvas on the right side with two new tiles. I'm going to upload an image for the first tile and ming the token. And let me do the same for the second tile. I am now done contributing. If I reload the marketplace, I can see that the canvas does display my new tiles.

### Vote on tiles

Now, what if someone ruins a canvas with an inappropriate tile? That's where voting comes into play. In phase II of the development of Coopart (see dev roadmap below), contributors will be able to vote on each tile. If they believe a tile should not be in a canvas, they can vote to remove it. On the contrary, if they believe a tile is a perfect match for the canvas, they can vote to keep it. **Each canvas will be its own DAO and self-govern.** There are two ways to implement this, and I have not yet decided which way to go:

- First possibility: Only tile contributors can vote on other tiles. Each tile contributor can cast one vote per tile (upvote or downvote). If a tile has more downvotes than upvotes, it gets removed.

- Second possibility: Anyone can vote. This gives potential buyers a way to direct the development of a canvas that they might want to buy. People vote by delegating MATIC to a tile. The more MATIC, the more the vote count. If a tile has more MATIC for downvotes than upvotes, it gets removed. On the contrary, people liking a canvas can delegate a lot of MATIC to the tiles they like. The delegation also proves that the potential buyers have enough MATIC to buy the canvas later.

Let me know your opinion about this. I'm also open to other suggestions.

### Buy/Sell canvas

Once the contribution period of a canvas expires, no one can contribute to it anymore, and it is automatically put on sale in the marketplace. For now, I've only implemented a simple fixed price sale at 1 MATIC as a proof of concept. I will develop a more robust auction sale system in phase II (more in the roadmap). You can click _Buy Canvas_ and submit the transaction. After a few seconds, all the tiles from the canvas will appear in your wallet. I had first created an entrypoint that would merge all the tiles into a single FA2 token for the whole canvas, but then I thought that keeping tiles separated might allow owners to sell them separately and create a sense of collection. Buyers would then try to buy all tiles to complete their collection and reconstitute the whole canvas. This would increase the value of a single tile to a collector that already has all of them except that one. Just like the _Infinity Stones_ in _The Avengers_, you just need to have them all! 

I am not yet fully decided on the way to go. This is still a concept that I am still playing around with. 

Anyway, when a canvas is purchased, all the tile creators (except those that were voted out) are paid according to the number of tiles they contributed. E.g., if a canvas has 10 tiles and is sold for 1 MATIC, each tile creator will receive 0.1 MATIC. If someone contributed 2 tiles to that canvas, he would receive 0.2 MATIC.

## Dev roadmap
It's been a wild journey since I started working on this project only three weeks ago! It is such a complex platform that I could not develop everything by the end of this hackathon, so I have divided its development into 3 phases. The first phase is the current proof of concept that you see. It has a functional tile creator and editor with a smart contract that can mint tiles into FA2 tokens. Anyone can contribute new tiles. Canvases can then be sold for 1 MATIC in the marketplace.

Phase II will include the canvas DAO and voting system discussed previously. It will also have auction sales for canvases. Finally, I also plan to add a second form of cooperative art development: **layer-based** instead of tile-based. Here is an example. This image could be a first layer from an artist. Then another artist could add a mostly transparent layer but with a triangle in the middle. Then someone could add a layer with a grid, a layer with rocks, a layer with a person, and so on. Layers could also be voted in or out of a canvas.

Phase II should be finished on August 30th as I plan to submit it to the upcoming [NFT Vision Hackathon](https://nftvisionhack.com/)

Finally, phase III will be mostly bug fixing and many tests before deploying the smart contract on the Polygon mainnet in September.

![](https://coop.art/images/roadmap.png)

## How It's Made
- The frontend is made with React. The tile creator/editor is a 100% custom component that took me many days to code.
  
- The smart contracts are made in Solidity using modified ERC 721 contracts from Open Zeppelin.

- I built and deployed a custom subgraph at https://thegraph.com/studio/subgraph/coopart/ to query data from the frontend.

- I deployed the smart contract on the Polygon Mumbai Tesnet.

- I am using IPFS to store the tile images and token metadata. I first used [nft.storage](https://nft.storage/) but for some reason, uploading was very slow so I instead coded my own NFT metadata uploader using [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client) with the [infura](https://infura.io/docs/ipfs) gateway, leading to much faster uploads.

## Conclusion

Coopart is a revolutionary way of building NFT art cooperatively. Both tile-based canvas and layer-based canvas will lead to exceptional artistic pieces from thousands of artists working together and maybe worth millions.
