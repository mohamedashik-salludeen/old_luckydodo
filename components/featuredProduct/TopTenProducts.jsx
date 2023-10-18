import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import Product6 from '/public/images/products/6.png';
import Product7 from '/public/images/products/7.png';
import Product8 from '/public/images/products/8.png';
import Product9 from '/public/images/products/9.png';
import Product10 from '/public/images/products/10.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';

const TopTenProducts = ({ title = '' }) => {
	const divRef = useRef(null);
	const fullDivRef = useRef(null);
	const [numberFontSize, setNumberFontSize] = useState(200);

	useEffect(() => {
		if (divRef.current) {
			const divHeight = divRef.current.offsetHeight;
			let fullDivWidth = fullDivRef.current.offsetWidth;

			//let heightMultiplayer = divHeight > 2000 ? .10 : .15;
			let heightMultiplayer = 0.25;

            // if (fullDivWidth < 1200) {
			// 	setNumberFontSize(fullDivWidth * 0.23);
			// } else {
			// 	setNumberFontSize(divHeight + divHeight * heightMultiplayer);
			// }

			if (fullDivWidth < 1400) {
				setNumberFontSize(fullDivWidth * 0.20);
			}else if (fullDivWidth > 1399 && fullDivWidth < 2200) {
				setNumberFontSize(fullDivWidth * 0.17);
			} else {
				setNumberFontSize(380);
			}
		}
	}, []);

	return (
		<section className='featured_area topTen' ref={fullDivRef}>
			<div className='custom_container negMargin'>
				<div className='featured_title'>
					{title}{' '}
					<i>
						<AiOutlineRight />
					</i>
				</div>
				<div className='top_ten_product_listing'>
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
							2200: {
								slidesPerView: 6,
								slidesPerGroup: 1,
							},
							1400: {
								slidesPerView: 6,
								slidesPerGroup: 1,
							},
							998: {
								slidesPerView: 5,
								slidesPerGroup: 1,
							},
							625: {
								slidesPerView: 3,
								slidesPerGroup: 1,
							},
							0: {
								slidesPerView: 3,
								slidesPerGroup: 1,
							},
						}}
						preventClicksPropagation={true}
						preventClicks={true}
						scrollbar={{ draggable: false, hide: true }}
						slideToClickedSlide={false}
						pagination={{ clickable: true }}>
						<SwiperSlide key={1} className='movieShowcase__container--movie'>
							<div className='single_item n2'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product6} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													1
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={2} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product7} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													2
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={3} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product8} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													3
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={4} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product9} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													4
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={5} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image
												src={Product10}
												className='product'
												alt='product'
											/>
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													5
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={6} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product6} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													6
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={7} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product7} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													7
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={8} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product8} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													8
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
									</div>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide key={9} className='movieShowcase__container--movie'>
							<div className='single_item'>
								<a
									href='#'
									data-bs-toggle='modal'
									data-bs-target='#productModal'>
									<div className='product_box'>
										<div className='product-img'>
											<Image ref={divRef} src={Product9} className='product' alt='product' />
											<div className='product_number'>
												<span style={{ fontSize: `${numberFontSize}px` }}>
													9
												</span>
											</div>
										</div>
										<div className='product-dsrp'>
											<p>Apple Watch</p>
										</div>
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

export default TopTenProducts;
