import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
 
// console.log(process.env.API_KEY);
// console.log(process.env);

  return (
    
    <div className="App">
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  
  );
}

export default App;
