import { useEffect, useState } from "react";
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/css";

const FeaturedProducts = ({ title = '' }) => {
	
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
    const [width, setWidth] = useState(1378);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

	return (
		<section className='featured_area'>
			<div className='custom_container'>
				<div className='featured_title'>
					<a href='#' data-bs-toggle='modal' data-bs-target='#categoryModal'>
						{title}{' '}
						<i>
							<AiOutlineRight />
						</i>
					</a>
				</div>
				<div className='product_listing'>
					


                    <Swiper
                        className='movieShowcase__container'
                        navigation={true}
                        grabCursor={false}
                        draggable={false}
                        loop={true}
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
                        preventClicksPropagation={true}
                        preventClicks={true}
                        scrollbar={{ draggable: false, hide: true }}
                        slideToClickedSlide={false}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide
                                key={1}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
                                            <Image src={require('/public/images/products/1.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/1.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide
                                key={2}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/2.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/2.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide
                                key={3}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/3.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/3.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide
                                key={4}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/4.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/4.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide> 
						<SwiperSlide
                                key={5}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/5.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/5.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
						<SwiperSlide
                                key={6}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/14.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/6.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
						<SwiperSlide
                                key={7}
                                className="movieShowcase__container--movie">
                                <div className='single_item'>
                                    <a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
                                        <div className='product-img'>
											<Image src={require('/public/images/products/2.png')} className='product desktoImg' alt='product' />
                                            <Image src={require('/public/images/products/mobile/2.png')} className='product mobileImg' alt='product' />
                                        </div>
                                        <div className='product-dsrp'>
                                            <p>Apple Watch</p>
                                        </div>
                                    </a>
                                </div>
                        </SwiperSlide>
						
                    </Swiper>




				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
