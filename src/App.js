import './App.css';
import {Header,Footer} from './components'
import About from './pages/About';

function App() {
  return (
    <div className=" w-screen flex flex-col items-center justify-center">
    <Header/>

    <About/>

    <Footer/>
      
    </div>
  );
}

export default App;
