import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/common/Layout"
import Navbar from '../components/common/Navbar'
import HeaderSmall from '../components/sections/HeaderSmall'
import { Section, Container } from '@components/global';

import { Link } from 'gatsby';

import styled from 'styled-components';

export default ({data}) => {

    let brewery = data.strapiBreweries;
    let address = brewery.address.split(',');
    let city = address[address.length-1].split(' ')[2] + ' ('+address[address.length-1].split(' ')[1]+')'


    return (
        <Layout>
            <Navbar selected="breweries"/>
            <HeaderSmall title={brewery.name} />
            <Section>
            <Container>
                <h2>{brewery.name} à {city}</h2>  
                       
                <Grid>
                    <div>
                        <img alt={brewery.name} src={'/images/'+brewery.image.split('.')[0]+'.jpg.jpg'} width={200}/>
                                             
                    </div>
                    <div>
                    <p>{brewery.description}</p>   
                    <p>Adresse : {brewery.address}</p>              
                       
                    </div>
                </Grid>
                <h3>Les bières de {brewery.name}</h3>
                <GridBeers>
                    {
                        brewery.beers.map((beer) => (
                            <LinkStyled to={`/bieres/${beer.slug}`} key={beer.id}>
                            <div>
                            <img alt={beer.name} src={'/images/'+beer.image} width={200}/>
                            <p>{beer.name}</p>
                            </div>
                            </LinkStyled>
                        ))
                    }
                </GridBeers>
            </Container>
            </Section>
        

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    strapiBreweries(slug: {eq:$slug}) {
        id
        image
        description
        name
        address
        slug
        beers {
          id
          name
          slug
          image
        }
    }
  }
`
const LinkStyled = styled(Link)`
    text-decoration:none;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 40px;
  text-align:justify;
  justify-items: center;
  align-items:center;
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
`;


const GridBeers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align:justify;
  justify-items: center;
  align-items:center;
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
`;
