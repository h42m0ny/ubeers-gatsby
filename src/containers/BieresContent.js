import React from 'react';

import HeaderSmall from '../components/sections/HeaderSmall';
import Content from '../components/sections/Content';

import {StaticQuery, graphql} from 'gatsby'

const BieresContentContainer = (props) => (
  <StaticQuery
    query={graphql`
      {
        ghostPage(slug: {eq: "bieres"}) {
          id
          title
          feature_image
          html
        }
      }
    `}
    render={data => (
        <React.Fragment>
        <HeaderSmall title={data.ghostPage.title} />
        <Content data={data.ghostPage}/>
        </React.Fragment>
    )}
  ></StaticQuery>

  
);

export default BieresContentContainer;