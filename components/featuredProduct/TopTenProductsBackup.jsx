import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Product6 from '/public/images/products/6.png';
import Product7 from '/public/images/products/7.png';
import Product8 from '/public/images/products/8.png';
import Product9 from '/public/images/products/9.png';
import Product10 from '/public/images/products/10.png';
import NextButton from '../common/NextButton';
import PrevButton from '../common/PrevButton';




const TopTenProducts = ({ title = "" }) => {


    const divRef = useRef(null);
    const fullDivRef = useRef(null);
    const [numberFontSize, setNumberFontSize] = useState(200);

    useEffect(() => {
        if (divRef.current) {
            const divHeight = divRef.current.offsetHeight;
            let fullDivWidth = fullDivRef.current.offsetWidth;

            


            console.log('Div height:', divHeight);
            console.log('full Div width:', fullDivWidth);
  
            //let heightMultiplayer = divHeight > 2000 ? .10 : .15;
            let heightMultiplayer = .25;

            if(fullDivWidth < 1200){
                setNumberFontSize(fullDivWidth * .23);
            }else{
                setNumberFontSize(divHeight + ( divHeight * heightMultiplayer));
            }
  
            
            console.log('numberFontSize:', numberFontSize);
        }
    }, []);


    const settings = {
        infinite: true,
        autoplay: false,
        focusOnSelect: false,
        speed: 1000,
        slidesToShow: 6,
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
    return (
        <section className="featured_area topTen" ref={fullDivRef}>
            <div className="custom_container negMargin">
                <div className="featured_title">{title} <i><AiOutlineRight /></i></div>
                <div className="top_ten_product_listing">

                    <Slider {...settings} className="listing-box">
                        
                        <div key="1" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product6} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>1</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="2" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product7} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>2</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="3" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product8} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>3</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="4" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product9} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>4</span>
                                        </div>
                                        
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="5" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product10} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>5</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>


                        <div key="1" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product6} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>6</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="2" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product7} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>7</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="3" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                   
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product8} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>8</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        <div key="4" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product9} className='product' alt='product' />
                                        <div className="product_number">
                                            <span style={{ fontSize: `${numberFontSize}px` }}>9</span>
                                        </div>
                                    </div>
                                    <div className="product-dsrp">
                                        <p>Apple Watch</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        
                        {/* <div key="5" className="single_item">
                            <a href="#" data-bs-toggle='modal' data-bs-target='#productModal'>

                                <div className="product_box">
                                    <div className="product_number">
                                        <span style={{ fontSize: `${numberFontSize}px` }}>10</span>
                                    </div>
                                    <div className="product-img" ref={divRef}>
                                        <Image src={Product10} className='product' alt='product' />
                                        <div className="product-dsrp">
                                            <p>Apple Watch</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </a>
                        </div> */}

                    </Slider>
                    
                </div>
            </div>
        </section>
    );
}

export default TopTenProducts;
