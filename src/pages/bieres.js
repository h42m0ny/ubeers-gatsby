import React from 'react';


import {graphql} from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Content from '../components/sections/Content';

import styled from 'styled-components';

import { Section, Container } from '@components/global';

import Footer from '@sections/Footer';

import { Link } from 'gatsby';
import HeaderSmall from '../components/sections/HeaderSmall';

const BeersPage = ({data}) => (
    <Layout>
      <Navbar selected="beers" />
      <HeaderSmall title={data.ghostPage.title} />
      <Section>
        <Container>
          <div dangerouslySetInnerHTML={{__html: data.ghostPage.html}}/> 
         <Grid>              
          {data.allStrapiBeers.nodes.map((beer) => (
                  <LinkStyled to={`/bieres/${beer.slug}`}>
                  <div key={beer.id}>
                    <img src={'/images/'+beer.image} width={200}/>
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

    ghostPage(slug: {eq: "bieres"}) {
      id
      title
      feature_image
      html
    }
  }
`
const LinkStyled = styled(Link)`
    text-decoration:none;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
  align-items: center;
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
`;


export default BeersPage;