import React from 'react';

import { StaticQuery, graphql } from 'gatsby'

import { Section, Container } from '@components/global';

const BieresDataContainer = (props) => (
  <StaticQuery
    query={graphql`
      {
        allStrapiBeers {
            nodes {
              id
              image
              name
              slug
              category {
                name
              }
            }
          }
      }
    `}
    render={data => (
      <React.Fragment>
        <h2>Les bières</h2>

      </React.Fragment>
    )}
  ></StaticQuery>


);

export default BieresDataContainer;
