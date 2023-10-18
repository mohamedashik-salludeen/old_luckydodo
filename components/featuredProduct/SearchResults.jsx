import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';

import { setProduct } from '../../store/productsSlice';

const SearchResults = ({ products = [], openProductModal }) => {
    const dispatch = useDispatch();
    const selectedCity = useSelector((state) => state.cities.city);

    return (
        <section className="search_results">
            <div className="custom_container">
                <div className="row">
                    {products.length > 0 &&
                        products
                            .filter(
                                (product) =>
                                    !selectedCity ||
                                    selectedCity.name.toLowerCase() === 'international' ||
                                    product.cityNodeId.includes(selectedCity.id),
                            )
                            .map((product, index) => (
                                <div className="col-md-3" data-product-id={product?.objectID}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(setProduct({ product }));
                                            openProductModal({ product });
                                        }}
                                    >
                                        <div className="product-img">
                                            <Image
                                                src={product.images.thumbnail}
                                                className="product desktoImg"
                                                alt={product.name}
                                                unoptimized={true}
                                                width={260}
                                                height={146}
                                            />
                                            <Image
                                                src={product.images.mobile}
                                                className="product mobileImg"
                                                alt={product.name}
                                                unoptimized={true}
                                                width={108}
                                                height={162}
                                            />
                                        </div>
                                        <h2>{product.name}</h2>
                                    </a>
                                </div>
                            ))}
                </div>
            </div>
        </section>
    );
};

export default SearchResults;
