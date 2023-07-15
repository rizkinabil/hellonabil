import React from 'react';

import data from 'json/detailGallery';

export default function FeaturedImage() {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.gallery_info[1].list_image.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? 'column-5' : 'column-7'} ${index > 0 ? 'row-1' : 'row-2'}`}
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img src={item.image_url} alt={item.image_name} className="img-cover" />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
