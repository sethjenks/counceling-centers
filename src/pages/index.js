import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    


    return (
      <Layout>
        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-weight-bold is-size-2">
                Hope is here.
              </h1>
              <h2 className="subtitle">
                We help others strenghen their own ability for healing, peace, and happiness.
              </h2>
              <Link className="button is-primary" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </section>
          <section className="section is-medium">
            <div className="container">
              <div className="content">
              <div className="columns">
                <div className="column is-6">
                <h2 className="has-text-weight-bold is-size-2">Our Mission</h2>
                <p>At Counseling Centers of Utah we believe that within each of us is a "Self" that is far more powerful than any of us can imagine.
                 It is our mission to assist those we work with in discovering their "Self", to deepen and understand their own potential,
                 and help them become empowered to realize their capacity for healing, peace, and happiness.
                 </p>
                </div>
                <div className="column is-4">
                <h2 className="has-text-weight-bold is-size-2">Our Mission</h2>
                <p>At Counseling Centers of Utah we believe that within each of us is a "Self" that is far more powerful than any of us can imagine.
                 It is our mission to assist those we work with in discovering their "Self", to deepen and understand their own potential,
                 and help them become empowered to realize their capacity for healing, peace, and happiness.
                 </p>
                </div>
              </div>

              </div>
            </div>
          </section>
          <section className="section is-medium"
               style={{
               backgroundColor: '#0B1730',
              }}
          >
            <div className="container">
              <div className="content">
                <div className="columns">
                  <div className="column is-5">
                    <p style={{
                       color: '#ffffff',
                       }}>
                    Our passion is to act as the sculptor described by Michelangelo when he stated:
                    </p>
                    <h2 className="has-text-weight-bold is-size-2"
                    style={{
                    color: '#ffffff',
                    }}>"I saw the angel in the marble and carved until I set it free.”</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section is-medium">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Family Life Education</p>
                <div class="content">
                  <p>provides clients with information and skills in a variety of topics, including, parenting, communication, marriage, and self-esteem</p>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Family Life Education</p>
                <div class="content">
                  <p>provides clients with information and skills in a variety of topics, including, parenting, communication, marriage, and self-esteem</p>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
              <p class="title">Family Life Education</p>
                <div class="content">
                  <p>provides clients with information and skills in a variety of topics, including, parenting, communication, marriage, and self-esteem</p>
                </div>
              </article>
            </div>
            </div>
            <Link className="button is-large is-fullwidth" to="/services">
              See all of our services
            </Link>
  </section>
</Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
