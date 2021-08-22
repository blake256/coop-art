type buy_param = sale

(**
Buy a tile from the on_sale list, and transfer it to the buyer.
Several checks are carried out: the tile must be on sale, owned by someone and must exist. The amount sent must match the tile price
@return storage with modified operators and on_sale lists
*)
let buy(_buy_parameters, storage : buy_param * nft_token_storage) : (operation  list) * nft_token_storage =
    let _buyer: address = Tezos.sender in
    //TODO
    ([] : operation list), storage

