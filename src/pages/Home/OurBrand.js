import React from "react";
import Slider from "react-slick/lib/slider";
import img1 from "../../images/brand/Ghs.jpg";
import img2 from "../../images/brand/Bmw.jpg";
import img3 from "../../images/brand/honda.jpg";
import img4 from "../../images/brand/Tesla gsx.jpg";
import img5 from "../../images/brand/Tesla.jpg";
import img6 from "../../images/brand/toyta.jpg";
const OurBrand = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-16 mt-16">
      <h2 className="text-3xl font-bold text-center mb-12 underline">Our available Brand</h2>
      <div>
        <Slider {...settings}>
          <div>
            <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">GHX</h2>
                <p>They are 5 years business partner</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">BMW</h2>
                <p>They are 2 years business partner</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Honda</h2>
                <p>They are 6 years business partner</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tesa</h2>
                <p>They are 1 years business partner</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img5} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tesla GSX</h2>
                <p>They are 7 years business partner</p>
              </div>
            </div>
          </div>
          <div>
          <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img src={img6} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Toyta</h2>
                <p>They are 6.5 years business partner</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurBrand;
