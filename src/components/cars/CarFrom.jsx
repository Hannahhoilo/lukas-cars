import { useState } from "react";
import CarList from "./CarList"; // kommer til å bruke car staten. 

const CarForm = () => {

	const [cars, setCars] = useState([]);
	const [brand, setBrand] = useState(""); // defauten er en tom streng, bruker taster inn noe og fylles med innhold 
	const [model, setModel] = useState("");

	return (
    <section>
      <h2>REGISTRERE BIL</h2>
      <form>
        <label>Merke</label>
        <input type="text" />
        <label>Modell</label>
        <input type="text" />
		<button>Legg til</button>
      </form>
	  <CarList cars={cars}/>
    </section>
  );
}

export default CarForm;

/*
carform skal ha state med registrerte bilder;: array med biler
en stilstand for merke og en for smodel som bruekr taster inn 
tre tilstander skal vi ha her . 
arrayet blir sendt inn i carlist, sp list blir inrealtime oppdadert på carlisr.jsx hver gang state blir 
endret 
inneholder
2 tekstbokser, knapp
inneholder carlist også, sender registrerte biler
*/