import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import lighthouse from '../../static/img/lighthouse.jpeg'
import butterfly from '../../static/img/butterfly.png'
import sculpture from '../../static/img/sculpture.png'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero is-large"
                 style={{
                   backgroundImage: `url(${lighthouse})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'noRepeat',

                 }}
                 >
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-weight-bold is-size-1 has-text-white">
                Hope is here.
              </h1>
              <p className="subtitle has-text-white is-size-4">
                We help others strengthen their own ability for healing, peace, and happiness.
              </p>
              <Link className="button is-large" to="/contact">
                Work with us
              </Link>
            </div>
          </div>
        </section>
          <section className="section is-medium">
            <div className="container">
              <div className="content">
              <div className="columns">
                <div className="column is-4 is-offset-2">
                <figure className="image">
                  <img className="is-rounded" src={butterfly}/>
                </figure>
                </div>
                <div className="column is-4">
                <h2 className="has-text-weight-bold is-size-2">Our Mission</h2>
                <p>At Counseling Centers of Utah we believe that within each of us is a "Self" that is far more powerful than any of us can imagine.
                 It is our mission to assist those we work with in discovering their "Self", to deepen and understand their own potential,
                 and help them become empowered to realize their capacity for healing, peace, and happiness.
                 </p>
                 <Link className="button is-medium" to="/about">
                   Learn more about our therapists
                 </Link>
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
                  <div className="column is-4 is-offset-2">
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
                  <div className="column is-4">
                  <figure className="image">
                    <img className="" src={sculpture}/>
                  </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
          <h2 className="title has-text-weight-bold is-size-1 has-text-centered">
          Some of our services
          </h2>
          </section>

          <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h3 className="title">Family Life Education</h3>
                <div className="content">
                  <p>We provide clients with information and skills in a variety of topics, including, parenting, communication, marriage, and self-esteem.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h3 className="title">Individual, Marriage and Family Counseling</h3>
                <div className="content">
                  <p>We're well grounded in Cognitive Behavior and Family Systems Therapies. Treatment plans are developed with the individual needs in mind.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
              <h3 className="title">Marriage Enrichment</h3>
                <div className="content">
                  <p>Counseling Centers of Utah uses the PREP approach, which focuses on techniques in problems solving and resolving conflict, communication, enjoying the relationship, and staying the course in the relationship.</p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h3 className="title">Sex Addiction Counseling</h3>
                <div className="content">
                  <p>is done by certified sex addiction counselors using a 12-step approach, developing by Patrick Carnes, that focuses on overcoming sex addictions and provide healing.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h3 className="title">Self-esteem Enhansement</h3>
                <div className="content">
                  <p>A program that emphasizes self-worth and increasing the sense of individual worth by focusing on respect for the dignity and worth of all people.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
              <h3 className="title">Pornography Addiction Counseling</h3>
                <div className="content">
                  <p>Uses much the same approach as sex addiction counseling, modified to focus more specifically on those issues faced by those addicted to pornography.</p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <h3 className="title">Communication Skills Development</h3>
                <div className="content">
                  <p>provides clients with experiential learning in communication.</p>
                </div>
              </article>
            </div>
          </div>
          <Link className="button is-large is-fullwidth is-primary" to="/contact">
            Let's work together
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
