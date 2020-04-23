import React from "react"
import Layout from "@common/Layout";
import Navbar from "@common/Navbar";
import Footer from '@sections/Footer';
import HeaderSmall from '../components/sections/HeaderSmall';
import ContentBrewerie from '../components/sections/ContentBrewerie';


const CellarsPage = ({ data }) => (
  <Layout>
    <Navbar selected="cellars" />
    <HeaderSmall title="Les caves à bières, pourquoi ?" />

    <ContentBrewerie />)



    <Footer />
  </Layout>
);

export default CellarsPage;
