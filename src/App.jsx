import { BrowserRouter, HashRouter } from "react-router-dom";
import './App.css';
import Pages from './routes/pages';

HashRouter



function App() {
  return (
    <>
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
    </>
  );
}

export default App;

