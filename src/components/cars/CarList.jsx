// car list skal generere car item, form skal gi bilder til cvar list osm den skal vise


import CarItem from "./CarItem"; 

const CarList = ({cars}) => { //cars blir sendt til carform

	const generateCarsJSX = () => {
		// denne generate som vi får map, for å skape jsx av itemcomponenten
		// skal nå loope gjennom med map, map er en løkkefusnkjon
		return cars.map((car, i) => 
			<CarItem
				/* denne trenger to props, car og key. 
				key er en teknisk ting når man generer med løkkekomponenter 
				m¨ man alltid sette på keydet er fodi react trenger en unik id 
				for å skille fra hverandre */
				key={"car" + i}
				car={car} // før = så må vi har car. hadde det hetet vehicle skulle det hete vehicl. car er det 
				//midlertidlige objetet . 
			/>
		); // hvror hver car gjør noe..
	}

	return (
		<section>
			<h2>Registrerte bilder</h2>
			<section>{
				cars.length > 0 ?
				generateCarsJSX()
				: <p>Ingen biler registrert! </p>
				// er det minst en bil så generer biler
				//ellers : hvis det ikke er minst en bil, så skriv ut medling til bruker 
			}</section>
		</section>

	)
}

export default CarList;

// carlsit generere flere bilder på siden, er 
// litcomponent som fpår tak i informasjon her array med bilder.
//  i dette tilfelelet fra form. list må få en prop som blir sendt inn 
// som inneholder bilene så carlist skal få arrayen  med biler som skal bli sendt 