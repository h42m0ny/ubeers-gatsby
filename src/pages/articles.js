import React from "react"
import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import HeaderSmall from "../components/sections/HeaderSmall"
import { Container, Section } from "../components/global"

const ArticlesPage = data => (
  <Layout>
    <Navbar selected="articles" />
    <HeaderSmall title="Les actualités de la bière" />
    <Container>
      <Section content>
        <p>Articles</p>
      </Section>
    </Container>
    <Footer />
  </Layout>
)

export default ArticlesPage
