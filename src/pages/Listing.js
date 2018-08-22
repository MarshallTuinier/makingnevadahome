import React, { Component } from 'react';

class Listing extends Component {
  render() {
    const query = this.props.location.search;
    const mls = query.slice(5, -1) + query.charAt(query.length - 1);
    console.log(mls);
    return (
      <div style={{ height: '95vw', maxHeight: '1100px' }}>
        <iframe
          src={`https://www.propertypanorama.com/instaview/las/${mls}`}
          width="99%"
          height="100%"
        />
      </div>
    );
  }
}

export default Listing;
