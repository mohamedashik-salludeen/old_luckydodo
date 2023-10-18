import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../../store/categoriesSlice';
import { setProduct } from '../../store/productsSlice';

const ProductList = ({ category, products = [], openCategoryModal, openProductModal }) => {
    const swiperContainerRef = useRef(null);

    const dispatch = useDispatch();

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const [width, setWidth] = useState(1378);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <section className="featured_area">
            <div className="custom_container">
                <div className="featured_title">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(setActiveCategory({ category }));
                            openCategoryModal({ category });
                        }}
                    >
                        {category.name}{' '}
                        <i>
                            <AiOutlineRight />
                        </i>
                    </a>
                </div>
                <div className="product_listing">
                    <Swiper
                        className="movieShowcase__container"
                        navigation={true}
                        grabCursor={false}
                        draggable={true}
                        loop={false}
                        preventClicks={true}
                        preventClicksPropagation={true}
                        // loopAdditionalSlides={
                        // width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
                        // }
                        breakpoints={{
                            1378: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                            },
                            998: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            625: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            0: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                        }}
                        scrollbar={{ draggable: false, hide: true }}
                        slideToClickedSlide={false}
                        pagination={{ clickable: true }}
                        ref={swiperContainerRef}
                    >
                        {products.length > 0 &&
                            products.map((product, index) => (
                                <SwiperSlide key={index + 1} className="movieShowcase__container--movie">
                                    <div className="single_item" data-product-id={product?.objectID}>
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
                                            <div className="product-dsrp">
                                                <p>{product.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
