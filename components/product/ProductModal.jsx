import Watch from '/public/images/watch.png';
import Logo from '/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { AiOutlineCheck } from 'react-icons/ai';

import Modal from 'react-bootstrap/Modal';
import { use, useEffect, useState } from 'react';

const ProductModal = ({ show = false, closeProductModal, handleParticipation, handleFavoriteClick }) => {
    const product = useSelector((state) => state.products.product);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const favoriteIds = useSelector((state) => state.favorite.favorites);
    const participationIds = useSelector((state) => state.participant.participantions);

    const [isFavorite, setIsFavorite] = useState(false);
    const [isParticapated, setIsParticapated] = useState(false);

    useEffect(() => {
        product?.id && setIsFavorite(favoriteIds.includes(product.id));
    }, [favoriteIds, product?.id]);

    useEffect(() => {
        product?.id && setIsParticapated(participationIds.includes(product.id));
    }, [participationIds, product?.id]);

    return (
        <div className="transperentModal">
            <Modal show={show} id="productModal" backdrop="static">
                <div className="product-bg-area">
                    <button type="button" className="btn-close btn-close-white" onClick={closeProductModal}></button>
                    <div
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="mobile_arrow_close"
                        onClick={closeProductModal}
                    >
                        <i>
                            <AiOutlineLeft />
                        </i>
                    </div>
                    <div className="product-top-image">
                        <Image
                            src={product?.images?.large || ''}
                            className="product desktoImg"
                            alt="product"
                            width={1021}
                            height={563}
                        />
                        <Image
                            src={product?.images?.large || ''}
                            className="product mobileImg"
                            alt="product"
                            width={393}
                            height={484}
                        />
                    </div>
                    <div className="product-details-area">
                        <div className="product-details-flex">
                            <h3 className="title">{product?.name || ''}</h3>
                            <div className="d-flex productButtons">
                                {/* <div className='product-check'>
                                    <div className="checked"><i><TiTick/></i></div>
                                </div> */}

                                {isAuthenticated ? (
                                    <>
                                        <div className="playnow">
                                            {isParticapated ? (
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    <i>
                                                        <AiOutlineCheck />
                                                    </i>
                                                </a>
                                            ) : (
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleParticipation(product);
                                                    }}
                                                >
                                                    <i>
                                                        <BsFillPlayFill />
                                                    </i>
                                                    <span>Play</span>
                                                </a>
                                            )}
                                        </div>
                                        <div className="wishlist">
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleFavoriteClick({ isFavorite, productId: product.id });
                                                }}
                                            >
                                                <i>{isFavorite ? <FaHeart /> : <AiOutlineHeart />}</i>
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="playnow" data-bs-dismiss="modal">
                                            <Link href="/login">
                                                <i>
                                                    <BsFillPlayFill />
                                                </i>
                                                <span>Play</span>
                                            </Link>
                                        </div>
                                        <div className="wishlist" data-bs-dismiss="modal">
                                            <Link href="/login">
                                                <i>
                                                    <AiOutlineHeart />
                                                </i>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="product-details-text-info">
                            <p>{product?.bodyText || ''}</p>
                        </div>
                    </div>

                    <div className="product-white-bg">
                        <Image src={Watch} alt="av" />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProductModal;
