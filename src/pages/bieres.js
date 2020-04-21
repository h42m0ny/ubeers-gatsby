import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import BieresContentContainer from '../containers/BieresContent';

const BeersPage = ({ data }) => (
  <Layout>
    <Navbar selected="beers" />
    <HeaderSmall title=" Découvrez des bières d'exceptions" />
    {
      data.allStrapiBeers.edges.map(
        beerData => (
          <ContentBeers data={beerData.node} />
        )
      )
    }

    <Footer />
  </Layout>
);

export const query = graphql`
{
  allStrapiBeers {
    edges {
      node {
           id
            name
            image
            description
            slug
            brewery {
              name
            }
            category {
              name
            }
      }
    }
  }
}
`
export default BeersPage;