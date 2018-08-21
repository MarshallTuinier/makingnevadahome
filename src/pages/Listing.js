import React, { Component } from 'react';

class Listing extends Component {
  render() {
    const parseQueryString = input =>
      input
        .slice(input.indexOf('?') + 1)
        .match(/[\w\d%\-!.~'()\*]+=[\w\d%\-!.~'()\*]+/g)
        .map(s => s.split('=').map(decodeURIComponent))
        .reduce(
          (obj, [key, value]) => Object.assign(obj, { [key]: value }),
          {}
        );
    const mls = parseQueryString(this.props.location.search).mls;
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
