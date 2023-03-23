// import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import Footer from './Pages/Footer/Footer';


function App() {
  return (

    // backgroundImage: 
    // "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",

    // #f7fafc
    // #f6f6f6
    <div style={{backgroundColor:'#f7fafc', backgroundImage:"url('https://w0.peakpx.com/wallpaper/154/372/HD-wallpaper-telegram-background-whatsapp-creative-android-pattern-texture-abstract.jpg')"}} className="App">
      <Navbar />
      <AllRoutes /> 
      <Footer />
    </div>
  );
}

export default App;
