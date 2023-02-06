import React from 'react';

import Breadcrumb from 'Elements/Breadcrumbs';
import data from '../../json/detailGallery';

export default function TopSection({ params, breadcrumb }) {
  const paramId = params.match.params.id;

  return (
    <div className="detail-project container">
      <div className="row">
        <div className="col-sm-5">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-sm-auto title-section">
          <h1>{data.gallery_info[paramId].title}</h1>
          <p className="text-gray-500">
            Design By <span className="font-weight-bold text-gray-600">{data.gallery_info[paramId].designer}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
