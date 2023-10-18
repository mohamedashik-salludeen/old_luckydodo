import { useSelector } from 'react-redux';

const Hero = () => {
  const city = useSelector((state) => state.cities.city);
  return (
    <section className="top-banner-area">
      <div className="container">
        <h1>
          Events &amp; Things
          {city?.name ? ` in ${city.name}` : ''}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
