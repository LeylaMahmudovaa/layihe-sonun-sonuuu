import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

import Routes from './router';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes />
       <Footer/>
    </div>
  );
}

export default App;
