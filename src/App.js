import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home';
import { countryData } from './Redux/country/countrySlice';
import Details from './components/Details';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryData());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:fName" element={<Details />} />
      </Routes>

    </>
  );
}

export default App;
