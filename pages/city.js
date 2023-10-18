import City from '../components/city/City';
import SearchInput from '../components/search/Input';
import { getCities } from '../services/algoliaService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../store/citySlice';



export default function Home() {
  const dispatch = useDispatch();
  const [cisties, setCities] = useState([]);
  const activeCity = useSelector((state) => state.cities.city);
  const onClick = (city) => {
    dispatch(setCity({ city }));
  };

  
  useEffect(() => {
    getCities().then((res) => setCities(res));
  }, []);
  return (
    <>
      <SearchInput />
      <City cisties={cisties} activeCity={activeCity} onClick={onClick} />
    </>
  );
}
