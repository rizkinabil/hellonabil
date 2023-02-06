import React from 'react';
import data from 'json/detailGallery';

export default function Description() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>About the project:</h3>
            <p>{data.gallery_info[1].about}</p>

            <div class="spec">
              <h3>Build With:</h3>
              <span>laravel</span>
              <span>laravel</span>
            </div>
          </div>
          <div class="col">ini component messages</div>
        </div>
      </div>
    </>
  );
}
