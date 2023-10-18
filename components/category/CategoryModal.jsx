import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { AiFillAppstore } from 'react-icons/ai';
import { RxTextAlignLeft } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/productsSlice';
import Modal from 'react-bootstrap/Modal';

const CategoryModal = ({ show, openProductModal, closeCategoryModal }) => {
    const dispatch = useDispatch();

    const activeCategory = useSelector((state) => state.categories.activeCategory);
    const products = useSelector((state) => state.products.products);
    const selectedCity = useSelector((state) => state.cities.city);

    return (
        <div className="transperentModal">
            <Modal
                show={show}
                id="categoryModal"
                className="modal-xl"
                backdrop="true"
                keyboard={false}
                onHide={closeCategoryModal}
            >
                <div className="modal-body">
                    <div className="favoriteModal-content">
                        <div className="favoriteTitle">
                            <h1>{activeCategory && activeCategory.name}</h1>
                        </div>

                        <div className="favoriteProductListing">
                            <div className="titleToosl">
                                {/* <div className="favTitle">New Releases</div> */}
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
                            </div>

                            <div className="fabListing">
                                <div className="row">
                                    {products &&
                                        products
                                            .filter((product) => product.categoryNodeId === activeCategory?.id)
                                            .filter(
                                                (product) =>
                                                    !selectedCity ||
                                                    selectedCity.name.toLowerCase() === 'international' ||
                                                    product.cityNodeId.includes(selectedCity.id),
                                            )
                                            .map((product) => (
                                                <div className="col-md-3" key={product.id}>
                                                    <div className="singleProduct">
                                                        <div className="proImage">
                                                            <a
                                                                href="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(setProduct({ product }));
                                                                    closeCategoryModal();
                                                                    openProductModal({ product });
                                                                    return false;
                                                                }}
                                                            >
                                                                <Image
                                                                    src={product.images.thumbnail}
                                                                    className="product desktoImg"
                                                                    alt="product"
                                                                    unoptimized={true}
                                                                    width={260}
                                                                    height={146}
                                                                />
                                                                <Image
                                                                    src={product.images.mobile}
                                                                    className="product mobileImg"
                                                                    alt="product"
                                                                    unoptimized={true}
                                                                    width={123}
                                                                    height={174}
                                                                />
                                                            </a>
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
            </Modal>
        </div>
    );
};

export default CategoryModal;
