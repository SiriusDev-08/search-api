import React, { useState, useEffect } from 'react';
import { AItem } from './Item';
import api from '../_config/axios';
import {useDispatch } from 'react-redux';
import {ActionCodes} from '../_config/redux'; 
import '../styles/list.scss'; 

type Item = {
    title: string;
    author: string;
    url: string;
    setItem:(arg: string) => void;
}
    
export const AList = () => {

  const [item, setItem] = useState<Item[]>([]); 
  const [term, setTerm] = useState(""); 
  const [input, setInput] = useState (""); 

  let Search = () => {
    setTerm(input); 
  }


  useEffect(()=>{
    const fetchData = async () => {
      const response = await api.get(term)
      setItem(response?.data.hits);
    }
    fetchData();
  },[term]);

  return (
    <>
      <div className='searchBar'>
        <label className='search'> Pesquise aqui: </label> <br/> 
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
        />
        <button
        type="button"
        className='button'
        onClick = {Search}  
        > 🔍 </button>
      </div>

      <section className="itemList"> 
        <h1> Eis os artigos que encontramos para você: </h1>
        <ul>
            {item?.map((item: any) => {
              return <AItem key={item.objectID} item={item} />;
            })}
        </ul>
      </section>
    </>    
  ); 
}