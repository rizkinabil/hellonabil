import React from 'react';

import data from 'json/showcase.json';

export default function Showcase() {
  console.log(data);

  return (
    <div className="showcase-container container">
      <div className="cas">
        {data.data_showcase.length === 0
          ? 'data kosong'
          : data.data_showcase.map((foto, index) => {
              return (
                <div className="data-gambar" key={index}>
                  <img src={data.data_showcase[index].info.image_url} alt={foto.image_name}></img>
                </div>
              );
            })}
      </div>
    </div>
  );
}
