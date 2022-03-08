
interface ItemProps {
    item: {
      objectID: number; 
      title: string;
      author: string;
      url: string;
    };
  }
  
  export function AItem (props: ItemProps) {
    return (
      <li>
        <strong>
        📘 {(props.item && props.item.title) || 'Título padrão'}
        </strong>
        <p> 👥{props.item.author ?? 'Autor padrão'}</p>
        🌐 <a href={props.item?.url ?? 'Url para o artigo'}> Acessar artigo </a>
      </li>
    );
  }