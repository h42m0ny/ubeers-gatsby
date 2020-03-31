import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import HeaderSmall from '../components/sections/HeaderSmall';
import Content from '../components/sections/Content';

const CellarsPage = () => (
  <Layout>
  <Navbar selected="cellars" />
  <HeaderSmall title="Les caves à bières, pourquoi ?" />
  <Content/>
  <Footer />
</Layout>
);

export default CellarsPage;