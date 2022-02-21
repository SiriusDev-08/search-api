interface ItemProps {
    item: {
      name: string;
      description?: string;
      html_url: string;
    };
  }
  
  export function Item(props: ItemProps) {
    return (
      <li>
        <strong>
          {(props.item && props.item.name) || 'Título padrão'}
        </strong>
        <p>{props.item?.description ?? 'Descrição do livro'}</p>
        <a href={props.item?.html_url ?? ''}>Link para o livro</a>
      </li>
    );
  }