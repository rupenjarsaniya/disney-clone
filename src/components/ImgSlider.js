import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 1,
        sliderToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    )
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    &>button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        
        &:hover{
            opacity: 1;
            transition: 
        }
    }

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: #fff;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px;
    }

    .slick-next{
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
        display: block;
        position: relative:
        padding: 4px;
    }

    img{
        width: 100%;
        height: 100%
    }

    &:hover{
        padding: 0;
        border: 4px solid rgb(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
`;

export default ImgSlider;
