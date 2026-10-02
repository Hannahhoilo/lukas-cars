import { useState } from "react";
import CarForm from "./components/cars/CarFrom";

function App() {

  const [darktheme, setDarkTheme] = useState(false); //default er det false at dark theme er true 

  const toggleTheme = () => {
    setDarkTheme(
      darktheme => !darktheme
    ); 
  }


  return (
    <div className={darktheme ? "dark-theme" : "light-theme"}>
      {/*
      klasse avhengig om en status er sann elelr ikke,
       med turnary operator, hvs tdat tema så gi denne diven
        en light eller dark theme 
        */}
      <header>
        <button onClick={toggleTheme}>Set theme</button>
      </header>

      <main>
        <header>
          <h1>Lukas Cars</h1>
          <p>Recap from earlier</p>
        </header>

        <CarForm/>

      </main>

      <footer></footer>
    </div>
  );
}

export default App
