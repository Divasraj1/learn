import './App.css';
import Header from "./components/Header"
import Question from './components/Question';
import Sidebar from './components/Sidebar';
import EliteMentor from './components/EliteMentor';

function App() {
  return (
    <div className="App">
      <Header />
      <EliteMentor/>
      <div style={{display:"flex"}}>
        <Sidebar/>
          <div>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
          </div>
        </div>
    </div>
  );
}

export default App;
