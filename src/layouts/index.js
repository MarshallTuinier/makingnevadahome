import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'typeface-varela-round';
import 'typeface-open-sans';
import 'typeface-league-script';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import favicon from '../assets/favicon.png';

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Making Nevada Home"
          meta={[
            {
              name: 'Making Nevada Home',
              content: 'Number 1 in Las Vegas Valley Real Estate'
            },
            {
              name: 'keywords',
              content:
                'Making Nevada Home, Las Vegas, Vegas, Henderson, Southern Neava, Real Estate, Home, Home Buying, Real, Estate'
            }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Header />
        <StyledBody>{this.props.children()}</StyledBody>
        <Footer />
      </div>
    );
  }
}

//-----Styles-----

const StyledBody = styled.div`
  margin: 0 auto;
  padding-top: 0;
`;

//-----End Styles-----

export default TemplateWrapper;
