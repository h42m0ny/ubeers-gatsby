import React from "react"

import { graphql } from "gatsby"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import Footer from "@sections/Footer"
import HeaderSmall from "../components/sections/HeaderSmall"
import ArticleItem from "../components/common/ArticleItem"
import { Container, Section } from "../components/global"

const ArticlesPage = data => (
  <Layout>
    <Navbar selected="articles" />
    <HeaderSmall title="Les actualités de la bière" />
    <Container>
      <Section content>
        {data.data.allGhostPost.nodes.map(post => (
          <ArticleItem key={post.id} post={post} />
        ))}
      </Section>
    </Container>
    <Footer />
  </Layout>
)

export const query = graphql`
  {
    allGhostPost {
      nodes {
        id
        excerpt
        published_at
        title
        slug
        primary_author {
          name
        }
      }
    }
  }
`

export default ArticlesPage
