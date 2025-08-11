import React from 'react';
import '../styles/InfiniteSlider.css';
import img1 from "../assets/svg/Mew.svg";
import img2 from "../assets/Bybit.webp";
import img3 from "../assets/Cheele.webp";
import img4 from "../assets/Dexcheck.webp";

const InfiniteSlider = () => {
  return (
    <>
      {/* Forward Scrolling Slider */}
      <div className="slider">
        <div className="slider-track">
          {/* Forward slider images */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 1" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 2" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 3" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 4" /></div>

          {/* Duplicate images to create seamless loop */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 5" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 6" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 7" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 8" /></div>
          <div className="slide"><img className="slider-image" src={img1} alt="Image 9" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 10" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 11" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 12" /></div>
          {/* Duplicate images to create seamless loop */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 5" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 6" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 7" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 8" /></div>
          <div className="slide"><img className="slider-image" src={img1} alt="Image 9" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 10" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 11" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 12" /></div>
        </div>
      </div>

      {/* Reverse Scrolling Slider */}
      <div className="slider reverse">
        <div className="slider-track">
          {/* Reverse slider images */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 13" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 14" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 15" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 16" /></div>

          {/* Duplicate images to create seamless reverse loop */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 17" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 18" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 19" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 20" /></div>
          <div className="slide"><img className="slider-image" src={img1} alt="Image 21" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 22" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 23" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 24" /></div>
          {/* Duplicate images to create seamless reverse loop */}
          <div className="slide"><img className="slider-image" src={img1} alt="Image 17" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 18" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 19" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 20" /></div>
          <div className="slide"><img className="slider-image" src={img1} alt="Image 21" /></div>
          <div className="slide"><img className="slider-image" src={img2} alt="Image 22" /></div>
          <div className="slide"><img className="slider-image" src={img3} alt="Image 23" /></div>
          <div className="slide"><img className="slider-image" src={img4} alt="Image 24" /></div>
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
