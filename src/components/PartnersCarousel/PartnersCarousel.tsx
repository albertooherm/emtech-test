import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../utils/images';

const PartnersCarousel: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partners = [
    images.salesforce,
    images.santander,
    images.universia,
    images.experis,
  ];

  return (
    <div className="w-full py-16 bg-emtechBlue">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-4 lg:space-y-2">
          <div className="flex items-center lg:mr-8 lg:w-auto">
            <p className="font-medium text-white text-justify text-2xl flex items-center lg:justify-center lg:whitespace-nowrap">
              Partnership with companies all over the world.
              <img src={images.shadow} alt="Shadow" className="ml-8 h-6 lg:h-40" />
            </p>
          </div>
          <div className="w-full lg:flex-1">
            <Slider {...settings} className="slick-carousel">
              {partners.map((partner, index) => (
                <div key={index} className="px-2">
                  <img src={partner} alt={`Partner ${index + 1}`} className="h-28 mx-auto" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
