import React  from 'react';
import { FaSearch } from 'react-icons/fa'; 
import '../styles/search.scss'; 



interface SearchProps {
    input:string;
    term:string;  
    setInput:(arg: string) => void;
    setTerm:(arg: string) => void;
}



export const Search = ({input, term, setInput, setTerm}: SearchProps ) => {



    let Look = () => {
        setTerm(input); 
      }

    return (
        <div className='searchBar'>
        <label className='search'> Pesquise aqui: </label> <br/> 
        <input
          type="text"
          className="input"
          /* placeholder="O que você deseja?" */
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
        />
        <button
        type="button"
        className='button'
        onClick = {Look}  
        > <FaSearch/> </button>
      </div>

    );

}