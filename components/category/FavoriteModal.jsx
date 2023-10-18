import Image from 'next/image';
import { FaList, FaHeart } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { RxTextAlignLeft } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/productsSlice';

const FavoriteModal = ({ openProductModal }) => {
    const products = useSelector((state) => state.products.products);
    const favoriteIds = useSelector((state) => state.favorite.favorites);
    const dispatch = useDispatch();
    // Filter products to include only the favorites
    const favoriteProducts = products.filter((product) => favoriteIds.includes(product.id));

    return (
        <div className="transperentModal">
            <div className="modal fade" id="favoriteModal" aria-labelledby="favoriteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-body">
                        <div className="favoriteModal-content">
                            <div className="favoriteTitle">
                                <h1>Favourite</h1>
                            </div>

                            <div className="favoriteProductListing">
                                {/* <div className="titleToosl">
                                    <div className="favTitle">New Releases</div>
                                    <div className="favTools">
                                        <button type="button">
                                            <i>
                                                <RxTextAlignLeft />
                                            </i>
                                        </button>
                                        <button type="button">
                                            <i>
                                                <AiFillAppstore />
                                            </i>
                                        </button>
                                    </div>
                                </div> */}

                                <div className="fabListing">
                                    <div className="row">
                                        {favoriteProducts.length > 0 &&
                                            favoriteProducts.map((product, index) => (
                                                <div className="col-md-3" key={product.id}>
                                                    <div className="singleProduct">
                                                        <div className="proImage">
                                                            <a
                                                                href="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(setProduct({ product }));
                                                                    openProductModal({ product });
                                                                }}
                                                            >
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
                                                            </a>
                                                            <button type="button" className="favoriteBtn">
                                                                <i>
                                                                    <FaHeart />
                                                                </i>
                                                            </button>
                                                        </div>
                                                        <div className="proTitle">
                                                            <a href="#">{product.name}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteModal;
