import "./App.css";
import Chicken from "./Chicken";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";

function App() {
  return (
    <div>
      {/* <Chicken/>
      <Chicken/> */}
      {/* <Greeter person ="Bill" from="colt"/>
      <Die sides = '4' />
      <Die sides = '5' />
      <ListPicker values={23} />*/}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </div>
  );
}

export default App;
