import logo from './logo.svg';
import './App.css';
import { Add } from './components/CountUp';
import { TemplateStrings } from './components/TemplateStrings';
import { Classes } from './components/Classes';

function App() {
  return (
    <>
      <h1>Groovy!</h1>
      <Add />
      <br />
      <br />
      <TemplateStrings />
      <br />
      <Classes />
    </>
  );
}

export default App;
