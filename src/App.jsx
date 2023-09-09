import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home.jsx';

function App() {

  return (
    <>
      <Header />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <Home />
      </div>
   </>
  );
}

export default App;