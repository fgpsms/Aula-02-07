import { ItemEstoque } from "./types";
import listaItens from "./estoque.json";

interface ListaItensProps {
  listaItens: ItemEstoque[];
  handleDelItens: (id: number) => void;
}

export const listaItens = ({ listaItens, handleDelItens }) => {
  return (
    <div>
      <h1>Lista de Itens do Estoque</h1>
      <ul>
        {listaItens.map((item: ItemEstoque) => (
          <li>
            <h2>{item.nome}</h2>
            <p>{item.preco}</p>
            <p>{item.quantidade}</p>
            <button onClick={() => handleDelItens(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
