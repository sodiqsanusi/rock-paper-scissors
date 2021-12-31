import { useContext } from "react";
import {GlobalContext} from './GlobalContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainRules from "./components/MainRules";
import Rules from "./components/Rules";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {

  const {isRulesOpen} = useContext(GlobalContext);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/chose/:chosen' element={<SecondPage />} />
        </Routes>
        <Rules />
        {isRulesOpen && <MainRules />}
      </div>
    </Router>
  );
}

export default App;
