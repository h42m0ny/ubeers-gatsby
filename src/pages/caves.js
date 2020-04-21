import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import HeaderSmall from '../components/sections/HeaderSmall';
import ContentBrewerie from '../components/sections/ContentBrewerie';
import {graphql} from "gatsby";


const CellarsPage = ({data}) => (
  <Layout>
  <Navbar selected="cellars" />
  <HeaderSmall title="Les caves à bières, pourquoi ?" />
  {
    data.allGhostPage.edges.map(breweryData=>(
      <ContentBrewerie data={breweryData.node}/>)
    )
  }
  
  <Footer />
</Layout>
);
export const query = graphql`
  {
    allGhostPage(filter: {slug: {eq: "caves"}}) {
      edges {
        node {
          id
          slug
          title
          plaintext
          feature_image
        }
      }
    }
  }
`
export default CellarsPage;