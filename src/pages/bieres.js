import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import ContentBeers from '../components/sections/ContentBeers';
import HeaderBeers from '../components/sections/HeaderBeers';

const BeersPage = () => (
  <Layout>
  <Navbar selected="beers" />
  <HeaderBeers />
  <ContentBeers/>
  <Footer />
</Layout>
);

export default BeersPage;