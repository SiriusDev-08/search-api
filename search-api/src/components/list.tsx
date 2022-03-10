import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import { Search } from './Search';
import api from '../_config/axios';
/* import {useDispatch } from 'react-redux';
import {ActionCodes} from '../_config/redux';  */
import '../styles/list.scss'; 
import { ReactReduxContext } from 'react-redux';


type ListItem = {
    title: string;
    author: string;
    url: string;
    setItem:(arg: string) => void;
}
    
export const List = () => {

  const [item, setItem] = useState<ListItem[]>([]); 
  const [input, setInput] = useState<string> (""); 
  const [term, setTerm] = useState<string>("");   

  useEffect(()=>{
    const fetchData = async () => {
      const response = await api.get(term)
      setItem(response?.data.hits);
    }
    fetchData();
  },[term]);

  return (
    <>
    <Search input = {input} setInput = {setInput}
    term = {term} setTerm = {setTerm}
     />

      <section className="itemList"> 
        <ul>
            {item?.map((item: any) => {
              return <Item key={item.objectID} item={item} />;
            })}
        </ul>
      </section>
    </>    
  ); 
}

