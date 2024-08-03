'use client'
import { ProvedorCarrinho } from "../data/contexts/ContextoCarrinho";

export default function Layout(props:any) {
    return (
        <div className="border border-blue-500">
            <ProvedorCarrinho>
                {props.children}
            </ProvedorCarrinho>
        </div>
    )
}