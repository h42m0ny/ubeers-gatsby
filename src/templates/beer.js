import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/Layout"
import Navbar from "../components/common/Navbar"
import HeaderSmall from "../components/sections/HeaderSmall"
import { Section, Container } from "@components/global"

import styled from "styled-components"

export default ({ data }) => {
  let beer = data.strapiBeers

  return (
    <Layout>
      <Navbar selected="beers" />
      <HeaderSmall title={beer.name} />
      <Section>
        <Container>
          <h2>
            La bière {beer.category.name} "{beer.name}"
          </h2>

          <Grid>
            <div>
              <p>{beer.description}</p>
              <p>Degré d'alcool : {beer.alcohol}% vol</p>
              <p>Brasserie : {beer.brewery.name}</p>
            </div>
            <div>
              <img alt={beer.name} src={"/images/" + beer.image} width={500} />
            </div>
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiBeers(slug: { eq: $slug }) {
      id
      alcohol
      image
      slug
      name
      category {
        name
      }
      brewery {
        id
        slug
        name
        image
      }
      description
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  text-align: justify;
  justify-items: center;
  margin: 24px 0;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }
  }
`
