const coopart = artifacts.require("Coopart");
const { MichelsonMap } = require("@taquito/taquito");
const web3 = require("web3");
const { pkh } = require("../faucet.json");

const admin = pkh
const empty_tiles = new MichelsonMap()
const empty_sales = []
const empty_tile_ids = []
const empty_owners = new MichelsonMap()
const tiles_grid_height = 10
const tiles_grid_width = 10
const empty_upvotes = new MichelsonMap();
const empty_downvotes = new MichelsonMap();

const market = {
    "tiles": empty_tiles,
    "tileIds": empty_tile_ids,
    "admin": admin,
    "height": tiles_grid_height,
    "width": tiles_grid_width,
    "sales": empty_sales,
    "owners": empty_owners,
    "upvotes": empty_upvotes,
    "downvotes": empty_downvotes,
}

const metadata = new MichelsonMap();
const token_info = new MichelsonMap();
const token_metadata = new MichelsonMap();
const empty_ledger = new MichelsonMap();
const empty_operators = new MichelsonMap();

// Set TZIP-16 contract metadata, with a JSON Blob
metadata.set("", web3.utils.asciiToHex("sha256://0x19faf07472cc91927ff455a82c0d51a682164b3b18125e6a5b1763a14f09a60c/https:%2F%2Fcoopart.io%2Fmetadata%2Fcontract_metadata.json").slice(2));

// Set TZIP-16 token metadata with a JSON Blob
// token_info.set(
//     "", web3.utils.asciiToHex("https://ipfs.io/ipfs/QmZKJKce6Y9yyuPvatGZuqsvY3dYd6TH6qt9AsTW22xtgq").slice(2)
// );

// Set TZIP-12 token metadata, in the token_metadata big map
// token_info.set(
//     "symbol", web3.utils.asciiToHex("TLD").slice(2)
// );
// token_info.set(
//     "name", web3.utils.asciiToHex("coopart").slice(2)
// );
// token_info.set(
//     "decimals", web3.utils.asciiToHex("0").slice(2)
// );
// token_info.set(
//     "thumbnailUri", web3.utils.asciiToHex("https://coopart.io/logo512.png").slice(2)
// );


// token_metadata.set(
//     1, {
//     token_info: token_info,
//     token_id: 1
// }
// );

const initial_storage = {
    "market": market,
    "ledger": empty_ledger,
    "operators": empty_operators,
    "metadata": metadata,
    "token_metadata": token_metadata
};

module.exports = async (deployer, _network, accounts) => {
    deployer.deploy(coopart, initial_storage, { last_completed_migration: 0, owner: accounts[0] });
};
