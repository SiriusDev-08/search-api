import React, { useState, useEffect } from 'react';
import { Item } from './item';
import api from '../_config/api.js'
import { useSelector } from 'react-redux'


type Item = {
  name: string;
  description?: string;
  html_url: string;
};

export function ItemList() {
  // Estado porque vai mudar
  const [item, setItem] = useState<Item[]>([]); // inicialmente vazio

  const searchTerm = useSelector(state => state);


  useEffect(()=>{
      
    const fetchData = async () => {

      const response = await api.get('https://hn.algolia.com/api/v1/search?query=X')
      setItem(response?.data);
    }

    fetchData();

  },[searchTerm]);

  return (
    <section className="ItemList">
      <h1>Lista de repositórios</h1>
      <ul>
        {item.map((item) => {
          return <Item key={item.name} item={item} />;
        })}
      </ul>
    </section>
  );
}