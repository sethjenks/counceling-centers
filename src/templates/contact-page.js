import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Contact from '../components/Contact';

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <div className="">
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h2>


              <Contact/>

            </div>
          </div>
          <div className="column is-5 is-offset-1">
            <div className="">
              <h3 className="title is-size-2 has-text-weight-bold is-bold-light">
              Our location
              </h3>
              <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
              <address>
              Counseling Centers of Utah<br/>
              9192 South 300 West,<br/>
              Suite 19<br/>
              Sandy, UT<br/>
              84070<br/>
              </address>
              <br/>
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
              Fax: 801.523.9239
              </h3>

              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
