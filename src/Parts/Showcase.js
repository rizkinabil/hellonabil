import React, { useRef } from 'react';

import data from 'json/showcase.json';

import arrow from 'Assets/Images/Icons/project-arrow.svg';

export default function Showcase(props) {
  const refSlide = useRef(null);
  const container = document.getElementById('slide');

  function clickToSlide() {
    // refSlide.scrollLeft()
    let scrollAmount = 0;
    let scrollMin = 0;
    container.scrollTo({
      top: 0,
      left: Math.min((scrollAmount += 500), scrollMin),
      behavior: 'smooth',
    });
  }

  return (
    <div className="showcase-container container" id="slide" ref={props.refProject}>
      <div className="carousel col" ref={refSlide}>
        {data.data_showcase.length === 0
          ? 'empty data'
          : data.data_showcase.map((item, index) => {
              return (
                <div className="data-gambar row" key={index}>
                  <a href={`/project/${item.id_dummy}`}>
                    <img src={data.data_showcase[index].image_url} alt={item.image_name} />
                  </a>
                </div>
              );
            })}
      </div>
      {/* <div className="slider"></div>
      <div className="button-next" onClick={clickToSlide}>
        <img src={arrow} alt="next button" />
      </div> */}
    </div>
  );
}
