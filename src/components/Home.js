import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import worldmap from './images/background.png';

const Home = () => {
  const { countryData } = useSelector((store) => store.country);

  const [searchCountry, setSearchCountry] = useState('');

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredData = countryData.filter((item) => (
    item.name.toLowerCase().includes(searchCountry.toLowerCase())
  ));

  return (
    <>
      <NavBar />
      <div className="banner">
        <img src={worldmap} alt="World Map" className="world-img" />
        <h1>World Statistics</h1>
      </div>
      <input type="text" value={searchCountry} onChange={handleSearch} placeholder="&#x1F50D; Search Country Here" className="search-input" />
      <div className="status-bar"><h2 className="country-status">Stats by Country</h2></div>
      <div className="container">
        {filteredData.map((item) => (
          <Link to={`/countries/${item.name}`} key={item.name} className="small-container">
            <img src={worldmap} alt={item.name} className="country-map" />
            <div className="country-info">
              <h2 className="country-name">{item.name}</h2>
              <h2 className="country-population">{item.population}</h2>
            </div>
          </Link>

        ))}

      </div>
    </>
  );
};

export default Home;
