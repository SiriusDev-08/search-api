import { Header } from '../../containers/Header/Header'; 
import { Footer } from '../../containers/Footer/Footer'; 
import { AList } from '../../components/list'; 
import '../../styles/global.scss'; 

export const App = () => {
  return (
    <>
      <Header />
      <AList />
      <Footer /> 
    </>
  );
}; 



