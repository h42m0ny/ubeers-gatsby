import React from "react"

import { graphql } from "gatsby"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import styled from "styled-components"

import { Section, Container } from "@components/global"

import Footer from "@sections/Footer"

import { Link } from "gatsby"
import HeaderSmall from "../components/sections/HeaderSmall"
import _ from "lodash"

class BreweriesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: props.data.allStrapiBreweries.nodes,
    }

    this.searchBreweriesFromInput = this.searchBreweriesFromInput.bind(this)
  }

  searchBreweriesFromInput(value) {
    if (value !== undefined && value.length >= 4) {
      this.setState({
        breweries: _.filter(
          this.props.data.allStrapiBreweries.nodes,
          brewery => brewery.name.indexOf(value) !== -1
        ),
      })
    } else {
      this.setState({
        breweries: this.props.data.allStrapiBreweries.nodes,
      })
    }
  }

  render() {
    return (
      <Layout>
        <Navbar selected="breweries" />
        <HeaderSmall title={"Les brasseries"} />
        <Section>
          <Container>
            <div>
              <p>
                Illud tamen te esse admonitum volo, primum ut qualis es talem te
                esse omnes existiment ut, quantum a rerum turpitudine abes,
                tantum te a verborum libertate seiungas; deinde ut ea in alterum
                ne dicas, quae cum tibi falso responsa sint, erubescas.
              </p>
            </div>
            <div>
              <LabelStyled>Recherche </LabelStyled>
              <InputStyled
                type="text"
                onChange={e => this.searchBreweriesFromInput(e.target.value)}
                placeholder={this.props.data.allStrapiBreweries.nodes[0].name}
              />
            </div>

            <Grid>
              {this.state.breweries.map(brewery => (
                <LinkStyled to={`/brasseries/${brewery.slug}`} key={brewery.id}>
                  <div>
                    <img
                      alt={brewery.name}
                      src={
                        "/images/" + brewery.image.split(".")[0] + ".jpg.jpg"
                      }
                      width={200}
                    />
                    <p>{brewery.name}</p>
                  </div>
                </LinkStyled>
              ))}
            </Grid>
          </Container>
        </Section>
        <Footer />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allStrapiBreweries {
      nodes {
        slug
        image
        id
        name
      }
    }
  }
`
const LinkStyled = styled(Link)`
  text-decoration: none;
`

const LabelStyled = styled.label`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
  color: #564f62;
`

const InputStyled = styled.input`
  width: 300px;
  height: 40px;
  font-size: 24px;
  color: #564f62;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  float: left;

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

export default BreweriesPage
