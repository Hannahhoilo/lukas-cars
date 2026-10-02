const CarItem = ({car}) => { // tar imot car objekt
	return (
		<article>
			<h3>{car.brand} : {car.model}</h3>
		</article>
	)
}

export default CarItem;

// car list skal generere car item, form skal gi bilder til cvar list osm den skal vise 