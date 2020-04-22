import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/Layout"
import Navbar from "../components/common/Navbar"
import HeaderSmall from "../components/sections/HeaderSmall"
import Content from "../components/sections/Content"

export default () => {
  return (
    <Layout>
      <Navbar selected="articles" />
      <HeaderSmall title={"articles"} />
    </Layout>
  )
}
