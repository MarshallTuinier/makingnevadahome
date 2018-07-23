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

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Making Nevada Home"
          meta={[
            { name: 'description', content: 'Sample' },
            {
              name: 'keywords',
              content:
                'Making Nevada Home, Las Vegas, Vegas, Henderson, Southern Neava, Real Estate, Home, Home Buying, Real, Estate'
            }
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
