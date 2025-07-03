import React from 'react';
import Slider, { Settings } from 'react-slick';

interface ICarousel {
    children: any;
    settings?: Settings;
}

const defaultSettings: Settings = {
    speed: 1000,
    autoplaySpeed: 7000,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1.5,
    infinite: true,
    pauseOnHover: false,
    arrows: false,
    centerPadding: '260px',
    adaptiveHeight: true,
    dots: true,
    swipe: false,
    centerMode: true,
    fade: false,
};

const Carousel = (props: ICarousel) => {
    const { settings, children } = props;

    return (
        <Slider {...defaultSettings} {...settings}>
            {children}
        </Slider>
    );
};

export default Carousel;
