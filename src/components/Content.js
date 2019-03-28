import React from 'react'
import PropTypes from 'prop-types'
import PageTransition from 'gatsby-plugin-page-transitions'

export const HTMLContent = ({ content, className }) => (
           <PageTransition
            defaultStyle={{
              transition: `opacity 250ms ease-in-out`,
              opacity: 0
            }}
            transitionStyles={{
              entering: { opacity: 0 },
              entered: { opacity: 1 }
            }}
            transitionTime={250}>
  				<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
            </PageTransition>
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
