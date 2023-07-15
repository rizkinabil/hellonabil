import React from 'react';
import data from 'json/detailGallery';
import MessageElement from 'Elements/MessageElement';

export default function Description() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About the project:</h3>
            <p>{data.gallery_info[1].about}</p>

            <div className="spec">
              <h3>Build With:</h3>
              <span>laravel</span>
              <span>laravel</span>
            </div>
          </div>
          <div className="col">
            <MessageElement isShowedButton />
          </div>
        </div>
      </div>
    </>
  );
}
