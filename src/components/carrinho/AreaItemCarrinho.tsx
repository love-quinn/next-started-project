import ItemCarrinho from "@/app/data/model/ItemCarrinho";

export interface AreaItemCarrinhoProps{
    item: ItemCarrinho
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps){
    return(
        <div>
            {props.item.produto.nome}
        </div>
    )
}