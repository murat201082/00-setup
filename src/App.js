

//import MyComponent from "./MyComponent"
//import GeneratorComponent from "./GeneratorComponent"
//import Dede from "./Dede"
import './App.css';
//import ConditionComponent from "./ConditionComponent"
//import MapComponent from "./MapComponent";
//import EventComponent from "./state/./EventComponent"
import StateComponent from './state/StateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       { /*<h2>Merhaba Dünya</h2>*/}
        {/* <MyComponent isim = "Yusuf" /> */}
        {/*<GeneratorComponent company = "Murats Company" department = "Education"/>
        <GeneratorComponent company = "Fibiler" department = "History"/>
        <Dede ad="Murat Sertkaya"/> */}
        {/* <ConditionComponent/> */}
        {/* <MapComponent/> */}
        {/* <EventComponent/> */}
        <StateComponent/>
      </header>
    </div>
  );
}

export default App;
