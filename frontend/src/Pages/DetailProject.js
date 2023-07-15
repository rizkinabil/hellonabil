import React, { Component } from 'react';
import Header from 'Parts/Header';
import Topsection from 'Parts/DetailProject/TopSection';
import GalleryGrid from 'Parts/DetailProject/FeaturedImage';
import Description from 'Parts/DetailProject/Description';

import data from '../json/detailGallery';

export default class DetailProject extends Component {
  componentDidMount() {
    document.title = `Projects | ${data.gallery_info[1].title}`;
  }

  render() {
    const breadcrubmb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'Project Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props} />
        <Topsection params={this.props} breadcrumb={breadcrubmb} />
        <GalleryGrid {...this.props} />
        <Description />
      </>
    );
  }
}
