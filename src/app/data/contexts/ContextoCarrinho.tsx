import { useState, createContext } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface ContextoCarrinhoProps {
    itens: ItemCarrinho[]
    qtdeDeItens: number
    adicionar: (item: Produto) => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
    const [ itens, setItens ] = useState<ItemCarrinho[]>([]);

    function adicionar(produto: Produto) {
        const indice = itens.findIndex((i) => i.produto.id === produto.id)

        if (indice === -1) {
            setItens([...itens, { produto, quantidade: 1}])
        } else {
            const novosItens = [...itens]
            novosItens[indice].quantidade++
            setItens(novosItens);
        }
    }
    return (
        <ContextoCarrinho.Provider value={{
            itens,
            adicionar,
            get qtdeDeItens() {
                return itens.reduce((total, item) => total + item.quantidade, 0)
            }
        }}>{props.children}</ContextoCarrinho.Provider>
    )
}

export default ContextoCarrinho;