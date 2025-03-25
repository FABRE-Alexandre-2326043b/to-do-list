import './App.css';
import { Header } from './Header/Header';
import {Footer} from './Footer/Footer';
import {Todo} from './Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
      <Footer/>
    </div>
  );
}

export default App;
