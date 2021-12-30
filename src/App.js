import { useContext } from "react";
import {GlobalContext} from './GlobalContext';
import Header from "./components/Header";
import MainRules from "./components/MainRules";
import Rules from "./components/Rules";
import FirstPage from "./pages/FirstPage";

function App() {

  const {isRulesOpen} = useContext(GlobalContext);

  return (
    <div className="App">
      <Header />
      <FirstPage />
      <Rules />
      {isRulesOpen && <MainRules />}
    </div>
  );
}

export default App;
