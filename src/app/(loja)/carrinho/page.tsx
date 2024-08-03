'use client'
import useCarrinho from "@/app/data/hooks/useCarrinho";
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho";
import Pagina from "@/components/template/Pagina";

export default function PaginaCarrinho() {
    const {itens} = useCarrinho()
    return (
        <Pagina>
            {itens.map((item) => (
                <AreaItemCarrinho key={item.produto.id} item={item}/>
            ) )}
        </Pagina>
    )
}