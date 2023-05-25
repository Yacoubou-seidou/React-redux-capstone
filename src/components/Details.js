import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const DetailsPage = () => {
  const { fName } = useParams();

  const { countryData } = useSelector((store) => store.country);
  const selectedCountry = countryData.find((item) => item.name === fName);

  return (
    <>
      <NavBar />
      <div className="details-container">
        <div className="image-containter">
          <img src={selectedCountry.flag} alt={selectedCountry.name} className="flag-img" />
          <h1 className="heading-text">{selectedCountry.name ? selectedCountry.name : 'none'}</h1>
        </div>
        <div className="status-bar"><h2 className="country-status">City/Town BreakDown - 2023</h2></div>
        <h2 className="item-info">
          <span>Name:</span>
          {selectedCountry.name ? selectedCountry.name : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Capital:</span>
          {selectedCountry.capital ? selectedCountry.capital : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Continent:</span>
          {selectedCountry.continent ? selectedCountry.continent : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Population:</span>
          {selectedCountry.population ? selectedCountry.population : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Area:</span>
          {selectedCountry.area ? selectedCountry.area : 'none'}
          km²
        </h2>
        <h2 className="item-info"><a href={selectedCountry.map ? selectedCountry.map : 'none'}>Map</a></h2>
      </div>
    </>
  );
};

export default DetailsPage;
