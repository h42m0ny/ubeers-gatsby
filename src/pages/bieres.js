import React from "react"

import { graphql } from "gatsby"

import { graphql } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import styled from 'styled-components';

import { Section, Container } from '@components/global';

import Footer from '@sections/Footer';

import { Link } from 'gatsby';
import HeaderSmall from '../components/sections/HeaderSmall';
import _ from 'lodash'

class BeersPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beers: props.data.allStrapiBeers.nodes,
      categories: props.data.allStrapiCategories.nodes,
      currentCategory: "Toutes",
    }

  }

  setBeerFromCategory(category) {
    if (category.name === undefined) {
      this.setState({
        beers: this.props.data.allStrapiBeers.nodes,
        currentCategory: category
      })
    } else {
      this.setState({
        beers: _.filter(this.props.data.allStrapiBeers.nodes, { category: { name: category.name } }),
        currentCategory: category.name
      })
    }
  }

  searchBeerFromInput(value) {
    console.log(value)
    if (value !== undefined && value.length >= 4) {

      this.setState({
        beers: _.filter(this.props.data.allStrapiBeers.nodes, (beer) => beer.name.indexOf(value) !== -1),
        currentCategory: 'Toutes'
      })
    } else {
      this.setState({
        beers: this.props.data.allStrapiBeers.nodes,
        currentCategory: 'Toutes'
      })
    }
  }

  render() {
    return (
      <Layout>
        <Navbar selected="beers" />
        <HeaderSmall title={"Les bières"} />
        <Section>
          <Container>
            <div>
              <LabelStyled>Recherche </LabelStyled>
              <InputStyled type="text" onChange={(e) => this.searchBeerFromInput(e.target.value)} placeholder={this.props.data.allStrapiBeers.nodes[0].name} />
            </div>
            <div>
              <ListStyled>
                <LiStyled><p>Par type de bières</p></LiStyled>
                <LiStyled>
                  <FilterCategoryStyled active={this.state.currentCategory === 'Toutes' ? true : false} onClick={() => this.setBeerFromCategory("Toutes")}>Toutes</FilterCategoryStyled>
                </LiStyled>
                {
                  this.state.categories.map((category) => (
                    <LiStyled key={category.id}>
                      <FilterCategoryStyled
                        active={this.state.currentCategory === category.name ? true : false}
                        onClick={() => this.setBeerFromCategory(category)}>{category.name}
                      </FilterCategoryStyled>
                    </LiStyled>
                  ))
                }
              </ListStyled>
            </div>

            <Grid>
              {
                this.state.beers.map((beer) => (
                  <LinkStyled to={`/bieres/${beer.slug}`} key={beer.id}>
                    <div>
                      <img alt={beer.name} src={'/images/' + beer.image} width={200} />
                      <p>{beer.name}</p>
                      <p>{beer.category.name}</p>
                    </div>
                  </LinkStyled>
                ))
              }
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
    allStrapiBeers {
      nodes {
        id
        image
        name
        slug
        category {
          name
        }
      }
    },
    allStrapiCategories {
      nodes {
        id
        name
        slug
      }
    }
  }
`
const LinkStyled = styled(Link)`
    text-decoration:none;
`
const ListStyled = styled.ul`
  padding: 0;
`

const LabelStyled = styled.label`
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
    color: #564F62;
`

const InputStyled = styled.input`
  width: 300px;
  height: 40px;
  font-size: 24px;
  color: #564F62;
`


const FilterCategoryStyled = styled.a`

  background: ${props => props.active ? "#564F62" : "#f3dc3b"};
  color: ${props => props.active ? "white" : "#564F62"};
  
  cursor: pointer;
  display: block;
  margin: 0 0 20px 5px;
  padding: 5px 10px;
`

const LiStyled = styled.li`
  display: block;
  float: left;
  list-style: none;
  font-size: 24px;
  margin-right: 40px;
`


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  float:left;

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
`;
export default BeersPage;
