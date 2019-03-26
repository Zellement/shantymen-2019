import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsAll from "../components/GigsAll"

export const GigPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <div className="flex800 main-content">
        <div className="copy">
          <h1>{title}</h1>
          <PageContent className="content" content={content} />
          <GigsAll />
        </div>
        <aside className="aside">
          <SpotifyPlayer />
        </aside>
      </div>
    </section>
  )
}

GigPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GigPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GigPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GigPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GigPage

export const GigPageQuery = graphql`
  query GigPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }

`
