import React from "react"
import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import HeaderSmall from "../components/sections/HeaderSmall"
import { Section, Container } from "@components/global"

const NotFoundPage = () => (
  <Layout>
    <Navbar selected="home" />
    <HeaderSmall title={"Oups... une 404 !"} />
    <Section>
      <Container>
        <p
          style={{
            textAlign: "center",
            fontSize: "120px",
            marginBottom: "60px",
          }}
        >
          ...
        </p>
      </Container>
    </Section>
    <Footer />
  </Layout>
)

export default NotFoundPage
