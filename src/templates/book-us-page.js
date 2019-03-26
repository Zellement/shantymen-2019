import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

function BookUsPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <section>
        <div className="flex800 main-content">
          <div className="copy">
            <h1>{post.frontmatter.title}</h1>
            <HTMLContent content={post.html} />
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BookUsPage

export const BookUsPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "book-us-page"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        html
      }
    }
  }
}`