// import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import Footer from './Pages/Footer/Footer';


function App() {
  return (

    // #f7fafc
    // #f6f6f6
    <div style={{backgroundColor:'#f7fafc'}} className="App">
      <Navbar />
      <AllRoutes /> 
      <Footer />
    </div>
  );
}

export default App;
