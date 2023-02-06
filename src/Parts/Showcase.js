import React from 'react';

import data from 'json/showcase.json';

import arrow from 'Assets/Images/Icons/project-arrow.svg';

export default function Showcase() {
  return (
    <div className="showcase-container container">
      <div className="carousel col">
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
      <div className="slider"></div>
      <div className="button-next">
        <img src={arrow} alt="next button" />
      </div>
    </div>
  );
}
