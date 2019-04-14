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

        <p>If you would like to enquire about booking us to play, please fill out the form below and we will get back to you as soon as possible.</p>
         
          <form className="form" name="bookUs" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <label className="hidden">Don't fill this out if you're human: <input type="hidden" name="bot-field" /></label>
            <label>Your Name: <input placeholder="Enter your name" type="text" name="name" /></label>   
            <label>Your Email: <input placeholder="Enter your email"  type="email" name="email" /></label>
            <label>Your Telephone: <input placeholder="Enter your telephone"  type="text" name="telephone" /></label>
            <label>Venue: <input placeholder="Enter your venue"  type="text" name="venue" /></label>
            <label>Date &amp; time requested: <input placeholder="Enter your date and time"  type="text" name="datetime" /></label>
            <label>Details: <textarea placeholder="Enter any additional information" rows="5"  name="details"></textarea></label>
            <button className="btn btn--orange" type="submit">Send</button>
          </form>

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