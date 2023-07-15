import React from 'react';

import data from 'json/showcase.json';
import iconTitle from 'Assets/Images/Icons/techstack-title-logo.svg';

export default function Showcase() {
  return (
    <div className="showcase-container container row">
      <div className="carousel container-grid-sm">
        {data.data_showcase.length === 0
          ? 'empty data'
          : data.data_showcase.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div className={`data-gambar col-lg-7`} key={index}>
                    <a href={`/project/${item.id_dummy}`}>
                      <img src={data.data_showcase[index].image_url} alt={item.image_name} />
                    </a>
                  </div>
                );
              } else {
                return (
                  <div className={`data-gambar col-lg-5`} key={index}>
                    <a href={`/project/${item.id_dummy}`}>
                      <img src={data.data_showcase[index].image_url} alt={item.image_name} />
                    </a>
                  </div>
                );
              }
            })}
      </div>
      <div class="attribute row">
        <img src={iconTitle} alt="logo" />
        <h1>Project</h1>
      </div>
    </div>
  );
}
