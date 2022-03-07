import React, { useState, useEffect } from 'react';
import { AItem } from './Item';
import api from '../_config/axios';

type Item = {
    title: string;
    author: string;
    url: string;
    setItem:(arg: string) => void;
}
    
export const AList = () => {

  const [item, setItem] = useState<Item[]>([]); 

  useEffect(()=>{
    const fetchData = async () => {
      const response = await api.get('https://hn.algolia.com/api/v1/search?query')
      setItem(response?.data.hits);
    }
    fetchData();
  },[]);

  return (
    <section className="itemList"> 
      <h1>Lista de artigos </h1>
      <ul>
        {item?.map((item: any, index:number) => {
          return <AItem key={item.index} item={item} />;
        })}
      </ul>
    </section>
  ); 
}