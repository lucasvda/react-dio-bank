import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { login } from "./services/login";


function App() {
  return (
    <>
    <Header title='Dio Bank'/>
    <Card callAction='Faça o seu Login:' placeHolderEmail='email' placeHolderPassword='senha' eventLogin={login}/>
    </>
   
      
    
    
  );
}

export default App;
