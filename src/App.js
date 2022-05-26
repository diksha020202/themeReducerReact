import { ThemeContext } from './ThemeContext/ThemeContextProvider';
import './App.css';
import { useContext } from 'react';
import Button from './Button/Button';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';



function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <hr />
      <hr />
      <Button style={{height:"400px", width:"600px"}} onClick={toggleTheme}  text="THEME" />
      <br />
      
      <button onClick={toggleTheme}  >TOGGLE</button>
<hr />
<hr />
<Footer/>
        
      </header>
    </div>
  );
}

export default App;
