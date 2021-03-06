import {useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainRules from "./components/MainRules";
import Rules from "./components/Rules";
import ErrorPage from "./pages/ErrorPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {

  const rules = useSelector(state => state.rules.value);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/chose/:chosen' element={<SecondPage />} />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Rules />
        {rules && <MainRules />}
      </div>
    </Router>
  );
}

export default App;
