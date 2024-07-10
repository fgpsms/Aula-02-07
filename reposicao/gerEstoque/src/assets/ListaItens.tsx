import { ItemEstoque } from "./types"
import estoque from "./estoque.json";
import { useEffect, useState } from "react";

interface ListaItensProps {
  listaItens: ItemEstoque[],
  handleDelItens: (id: number) => void;
}

export const ListaItens = (
  // { listaItens, handleDelItens}: ListaItensProps
  ) => {
    const [ListaItens, setListaItens] = useState<ItemEstoque[]>([]);
    useEffect(() => {
      setListaItens(estoque.itens)
    },[])
  return (
    <div>
      <h1>Lista de Itens do Estoque</h1>
      <ul>
        {ListaItens.map((item: ItemEstoque) => (
          <li>
            <h2>{item.nome}</h2>
            <p>{item.preco}</p>
            <p>{item.quantidade}</p>
            
          </li>
          
        ))}
      </ul>
    </div>
  );
};
