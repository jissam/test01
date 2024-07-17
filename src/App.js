import "./App.css";
import Name from "./Components/Name";
import Description from "./Components/Description";
import Price from "./Components/Price";
import Image from "./Components/Image";

function App() {
  const firstname = "Issam";
  return (
    <div>
      <Name />
      <Description />
      <Price />
      <Image />
      <div>{firstname ? <h2>Hello {firstname}</h2> : <h2>nothing</h2>}</div>
    </div>
  );
}

export default App;
