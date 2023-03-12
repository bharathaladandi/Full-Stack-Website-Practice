import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div style={{backgroundColor:'#f8f6f6'}} className="App">
      <Navbar />
      <AllRoutes /> 
      <Footer />
    </div>
  );
}

export default App;
