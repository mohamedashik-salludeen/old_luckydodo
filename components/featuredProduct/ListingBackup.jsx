import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import Product1 from '/public/images/products/1.png';
import ProductMobile1 from '/public/images/products/mobile/1.png';
import Product2 from '/public/images/products/2.png';
import Product3 from '/public/images/products/3.png';
import Product4 from '/public/images/products/4.png';
import Product5 from '/public/images/products/5.png';
import NextButton from '../common/NextButton';
import PrevButton from '../common/PrevButton';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/css";

const FeaturedProducts = ({ title = '' }) => {
	const settings = {
		infinite: true,
		autoplay: false,
		focusOnSelect: false,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

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
					<Slider {...settings} className='listing-box'>
						<div key='1' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									{/* <Image 
                                    srcSet={`${ProductMobile1} 2x`}
                                    src={Product1} className='product' alt='product'
                                    /> */}
									<img
										src='/images/products/1.png'
										srcSet='/images/products/mobile/1.png 480w, /images/products/1.png 800w'
										sizes='(max-width: 600px) 480px, 800px'
									/>
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch A</p>
								</div>
							</a>
						</div>

						<div key='2' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product2} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='3' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product3} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='4' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product4} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='5' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product5} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='6' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product2} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='7' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product3} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>

						<div key='8' className='single_item'>
							<a href='#' data-bs-toggle='modal' data-bs-target='#productModal'>
								<div className='product-img'>
									<Image src={Product4} className='product' alt='product' />
								</div>
								<div className='product-dsrp'>
									<p>Apple Watch</p>
								</div>
							</a>
						</div>
					</Slider>


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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
                                            <Image src={Product4} className='product' alt='product' />
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
