import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import Footer from "@sections/Footer"
import EquipeContainer from "../containers/Equipe"

const EquipePage = () => (
  <Layout>
    <Navbar selected="team" />
    <EquipeContainer />
    <Footer />
  </Layout>
)

export default EquipePage
