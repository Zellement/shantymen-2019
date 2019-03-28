import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/GigsUpcoming"

export const StandardPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <div className="flex800 main-content">
        <div className="copy">
          <h1>{title}</h1>
              <PageContent className="content" content={content} />
        </div>
        <aside className="aside">
          <GigsUpcoming />
          <SpotifyPlayer />
        </aside>
      </div>
    </section>
  )
}

StandardPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const StandardPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <StandardPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

StandardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StandardPage

export const StandardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }

`
