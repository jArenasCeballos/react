import logo from './logo.svg';
import './App.css';
import NavScrollExample from './componentes/nav/Navbar'
import UncontrolledExample from './componentes/slider/Slider'
import BasicExample from './componentes/contenido/Contenido'
import GroupExample from './componentes/cards/Cards'

function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <UncontrolledExample/>
      <BasicExample/>
      <GroupExample/>
    </div>
  );
}

export default App;
