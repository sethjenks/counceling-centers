import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import perriann from '../../static/img/perriann_headshot.png'
import steve from '../../static/img/steve_headshot.png'
import jackie from '../../static/img/jackie_headshot.png'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

<section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="section">
              <figure className="image">
                <img className="is-rounded" src={perriann}/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Perriann Parks Beyers, LCSW, MFT, CSAT I</h3>
              <p>is a Licensed Clinical Social Worker  (LCSW), Marriage and Family Therapist (MFT), and a Certified Sexual Addiction Therapist (CSAT I).  She has over 25 years in clinical experience, and worked full time at LDS Family Services (LDSFS) for over 14 years. Her clinical experience includes working with abuse, addictions, co-dependency, singles counseling, and marriage & family therapy.  She is also a Certified  Sex Addiction Therapist and has worked with pornography addictions, as well as all types of  other addictions.  In addition, Perriann has over 17 years of expertise in group therapy for men and women clients.  She has also worked with divorce adjustment and blended family issues for adults, teens and children, and has facilitated AMAC (Adults Molested as Children) Groups. She also is a Gottman Certified Educator and is Certified as an EMDR (Eye Movement Desensitization Reprocessing) Trained Therapist.
                Perriann is Founder and Executive Director of Counseling Centers of Utah. Direct...801-558-7054 Email: ppb.ccu@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="section">
              <figure className="image">
                <img className="is-rounded" src={steve}/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Stephen Beyers, CMHC, MC</h3>
              <p>is a Licensed Clinical Social Worker  (LCSW), Marriage and Family Therapist (MFT), and a Certified Sexual Addiction Therapist (CSAT I).  She has over 25 years in clinical experience, and worked full time at LDS Family Services (LDSFS) for over 14 years. Her clinical experience includes working with abuse, addictions, co-dependency, singles counseling, and marriage & family therapy.  She is also a Certified  Sex Addiction Therapist and has worked with pornography addictions, as well as all types of  other addictions.  In addition, Perriann has over 17 years of expertise in group therapy for men and women clients.  She has also worked with divorce adjustment and blended family issues for adults, teens and children, and has facilitated AMAC (Adults Molested as Children) Groups. She also is a Gottman Certified Educator and is Certified as an EMDR (Eye Movement Desensitization Reprocessing) Trained Therapist.
                Perriann is Founder and Executive Director of Counseling Centers of Utah. Direct...801-558-7054 Email: ppb.ccu@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="section">
              <figure className="image">
                <img className="is-rounded" src={jackie}/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Jackie Rodat, LMFT</h3>
              <p>Jackie Rodat is a Licensed Marriage and Family Therapist in private practice at Counseling Centers of Utah. Jackie has been specializing in working with teens and adolescents for the past 20+ years. She has vast experience in this field, as she also currently sees clients at Westridge Academy Residential Treatment Center, working with youth who struggle with behavioral and mental health issues. Jackie established the Intensive Outpatient Program for adolescents through Salt Lake Behavioral Health, and worked in the Inpatient Unit, as well.  Jackie has a long history working in residential treatment settings such as Vista Adolescent Treatment Center and Alpine Academy.  Her subsequent years of training and experience also include case management with Vietnamese and Somalian refugees, individual and family therapy with Catholic Community Services, individual and group therapy with adult and adolescent sex offenders through Center for Family Development, and therapy with adolescents and their families in substance abuse treatment with Cornerstone Counseling Center.  Jackie has a variety of experience working with disorders including: Adoption/Reactive Attachment Disorders, Adjustment Disorders, Autism Spectrum Disorders, Nonverbal Learning Disorder, ADD/ADHD, Anxiety, Borderline Personality Disorder, Bipolar Disorder, Depression, Eating Disorders, Oppositional Defiant Disorder, PTSD, Self-Harm and Sexual Abuse.  Jackie has a great passion for working with children, adolescents and their families, and seeing them empower themselves as their self-esteem grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</section>




  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
