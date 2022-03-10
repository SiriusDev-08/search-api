import React from 'react';
import { Header } from '../../containers/Header/Header'; 
import { Footer } from '../../containers/Footer/Footer'; 
import { List as ItemList} from '../../components/List'; 

import '../../styles/global.scss'; 

export const App = () => {

  return (
    <>
      <Header />
      <ItemList />
      <Footer /> 
    </>
  );
}; 



