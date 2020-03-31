import React from 'react';


import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';
import HeaderSmall from '../components/sections/HeaderSmall';
import Content from '../components/sections/Content';

const EquipePage = () => (
  <Layout>
  <Navbar selected="team" />
  <HeaderSmall title="Qui sommes-nous ?" />
  <Content/>
  <Footer />
</Layout>
);

export default EquipePage;