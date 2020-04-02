import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/common/Layout"
import Navbar from '../components/common/Navbar'
import HeaderSmall from '../components/sections/HeaderSmall'
import Content from '../components/sections/Content'

export default ({data}) => {
    console.log(data)
  return (
    <Layout>
        <Navbar selected="articles"/>
        <HeaderSmall title={data.ghostPost.title} />
        <Content data={data.ghostPost}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug:{ eq: $slug }) {
        html
        title
        published_at
        feature_image
        primary_author {
            name
        }
    }
  }
`
