import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import ContentBeers from '../components/sections/ContentBeers';
import HeaderSmall from '../components/sections/HeaderSmall';

const BeersPage = () => (
  <Layout>
  <Navbar selected="beers" />
  <HeaderSmall title=" Découvrez des bières d'exceptions" />
  <ContentBeers/>
  <Footer />
</Layout>
);

export default BeersPage;