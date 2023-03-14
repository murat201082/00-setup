

import MyComponent from "./MyComponent"
import GeneratorComponent from "./GeneratorComponent"
import Dede from "./Dede"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Merhaba Dünya</h2>
        <MyComponent isim = "Yusuf" />
        <GeneratorComponent company = "Murats Company" department = "Education"/>
        <GeneratorComponent company = "Fibiler" department = "Education"/>
        <Dede ad="Murat Sertkaya"/>
      </header>
    </div>
  );
}

export default App;
