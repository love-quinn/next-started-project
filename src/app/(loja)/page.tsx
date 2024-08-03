'use client'
import Pagina from "@/components/template/Pagina";
import useCarrinho from "../data/hooks/useCarrinho";
import produtos from "../data/constants/produto";
import CartaoProduto from "@/components/produto/CartaoProduto";

export default function Home() {
  return (
    <Pagina>
        <div className="flex gap-5 flex-wrap justify-center">
            {produtos.map(produto => (
                <CartaoProduto key={produto.id} produto={produto}/>
            ))}
        </div>
    </Pagina>
  );
}
