import './App.css';
import Header from "./components/Header"
import Question from './components/Question';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Question/>
      <Question/>
      <Question/>
      <Question/>
    </div>
  );
}

export default App;
