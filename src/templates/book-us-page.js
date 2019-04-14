import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function BookUsPage({ data }) {
  return (
    <div className="wrapper">
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} className="home-page" />
      <Header />
      <Hero h1="Book Us" h2="Drop us a message to enquire about a booking" />
      <div className="main-content">
        <div className="main-content__copy">
         stuff
        </div>
        <div className="main-content__aside">
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BookUsPage

export const BookUsPageQuery = graphql`
{
  allFile (filter:{relativePath:{eq:"book-us-page.jpg"}}){
    edges {
      node {
        childImageSharp {
          fluid(quality: 100, maxWidth:2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`