import React, { Component } from 'react';
import Header from 'Parts/Header';
import Topsection from 'Parts/DetailProject/TopSection';
import GalleryGrid from 'Parts/DetailProject/FeaturedImage';
import Description from 'Parts/DetailProject/Description';

export default class DetailProject extends Component {
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
