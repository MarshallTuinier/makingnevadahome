import React, { Component } from 'react';

class Listing extends Component {
  render() {
    const parseQueryString = i =>
      Array.from(new URLSearchParams(i).entries()).reduce(
        (c, p) => ((c[p[0]] = p[1]), c),
        {}
      );

    const mls = parseQueryString(this.props.location.search).mls;
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
