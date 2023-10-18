import Image from 'next/image';
import { TiTick } from 'react-icons/ti';

const City = ({ cisties = [], activeCity, onClick }) => {
    return (
        <section className="city-area">
            <div className="container">
                <div className="row row-cols-5">
                    {cisties.map((city, index) => (
                        <div
                            className="col"
                            onClick={() => {
                                onClick(city);
                                console.log("chk: " + city);
                            }}
                            key={city.id}
                        >
                            <div className={`singleCity ${activeCity?.id === city.id ? 'active' : ''}`}>
                                <Image
                                    src={require('/public/images/city/city1.png')}
                                    className="product desktoImg"
                                    alt={city.name}
                                />
                                <Image
                                    src={require('/public/images/city/mobile_city_img.png')}
                                    className="product mobileImg"
                                    alt={city.name}
                                />
                                <h2 className="cityName">{city.name}</h2>
                                {activeCity?.id === city.id && (
                                    <div className="checked">
                                        <i>
                                            <TiTick />
                                        </i>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default City;
