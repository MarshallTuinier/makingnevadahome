import React, { Component } from 'react';
import queryString from 'query-string';

class Listing extends Component {
  render() {
    const nmls = queryString.parse(this.props.location.search).nmls;
    console.log(nmls);
    return (
      <div style={{ height: '95vw', maxHeight: '1100px' }}>
        <iframe
          src={`https://www.propertypanorama.com/instaview/las/${nmls}`}
          width="99%"
          height="100%"
        />
      </div>
    );
  }
}

export default Listing;
