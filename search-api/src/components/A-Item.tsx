import {BsBookFill} from 'react-icons/bs';
import {BsGlobe} from 'react-icons/bs';
import {BsFillPeopleFill} from 'react-icons/bs'; 

interface ItemProps {
    item: {
      objectID: number; 
      title: string;
      author: string;
      url: string;
    };
  }
  
  export function Item (props: ItemProps) {
    return (
      <li>
        <strong>
         <BsBookFill/> {(props.item && props.item.title) || 'Título padrão'}
        </strong>
        <p> 
        <BsFillPeopleFill/> {props.item.author ?? 'Autor padrão'}
        </p>
        <BsGlobe /> <a href={props.item?.url ?? 'Url para o artigo'}> Acessar artigo </a>
      </li>
    );
  }