import Cities from "./Cities.component";
import CityData from "./CityData.component";

export default function City() {
  return (
    <div>
      <Cities />
      <CityData
        cityName="beer-yaackov"
        residentsNum="10,000"
        streetsNum="40"
        isThereBeach="false"
        citySymbol="https://upload.wikimedia.org/wikipedia/commons/8/8f/PikiWiki_Israel_9327_square_in_beer_yaakov.jpg"
      />
    </div>
  );
}
