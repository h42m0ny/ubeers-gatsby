import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import Footer from "@sections/Footer"
import CavesContainer from "../containers/Caves"

const CellarsPage = () => (
  <Layout>
    <Navbar selected="cellars" />
    <CavesContainer />
    <Footer />
  </Layout>
)

export default CellarsPage
