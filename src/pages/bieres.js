import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import BieresContentContainer from '../containers/BieresContent';

const BeersPage = () => (
  <Layout>
  <Navbar selected="beers" />
  
  <BieresContentContainer/>

  <Footer />
</Layout>
);

export default BeersPage;