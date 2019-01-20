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
                <img className="is-rounded" src={perriann} alt="Perriann Beyers"/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Perriann Parks Beyers, LCSW, MFT, CSAT I</h3>
              <p>is a Licensed Clinical Social Worker (LCSW), Marriage and Family Therapist (MFT), and a Certified Sexual Addiction Therapist (CSAT I). She has over 25 years in clinical experience, and worked full time at LDS Family Services (LDSFS) for over 14 years. Her clinical experience includes working with abuse, addictions, co-dependency, singles counseling, and marriage & family therapy. Perriann is also a Certified Sex Addiction Therapist and has worked with pornography addictions, as well as all types of other addictions. In addition, she has over 17 years of expertise in group therapy working with men and women clients, and has worked with divorce adjustment and blended family issues with adults, teens and children, as well as facilitated AMAC (Adults Molested as Children) Groups. Perriann is also a Gottman Certified Educator and Certified as an EMDR (Eye Movement Desensitization Reprocessing) Trained Therapist. She is active in giving back to the community, as she has served children as a volunteer at the Christmas Box House and teens at the Salt Lake County Crisis Residential Home, as well as serving adults in the Salt Lake Inner City. Perriann is Founder and Executive Director of Counseling Centers of Utah. Direct...801-558-7054 Email: ppb.ccu@gmail.com
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
                <img className="is-rounded" src={steve} alt="Steve Beyers"/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Stephen Beyers, CMHC, MC</h3>
              <p>is a Clinical Mental Health Counselor (CMHC) with a Masters Degree in Mental Health Counseling (MC). As a Certified EMDR (Eye Movement Desensitization Reprocessing) Trained Therapist, as well as a DBT Trained Therapist, Steve has expertise in working with personality & mood disorders, trauma, substance abuse, troubled teens, pornography & other addictions, and single adults. He also has extensive experience in couple’s therapy, and divorce & marital therapy, as Steve is a Gottman Certified Educator. Steve has clinical experience in working with males, couples, and group therapy. He has worked in conjunction with Court Ordered Substance Abuse Programs, Court Ordered Public Indecency & Lewdness Programs, and the State of Utah Juvenile Justice Services for ecclesiastical and individual mentoring for incarcerated youth. In addition, Steve has an extensive business background in the business sector, including 40 years in banking & finance, business management and organizational behavior. He has served in the nonprofit sector, sitting on numerous Boards, including Fourth Street Clinic, and currently on the Board of Directors and the Executive Committee of the Utah Nonprofits Association. Steve is Co-Founder and Financial Director of Counseling Centers of Utah.
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
                <img className="is-rounded" src={jackie} alt="Jackie Rodat"/>
              </figure>
            </div>
          </div>
          <div className="column is-8">
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light">Jackie Rodat, LMFT</h3>
              <p>is a Licensed Marriage and Family Therapist in private practice at Counseling Centers of Utah. Jackie has been specializing in working with teens and adolescents for the past 20+ years, who struggle with behavioral and mental health issues. Jackie worked in the Inpatient Unit through Salt Lake Behavioral Health, and established the Intensive Outpatient Program for adolescents. She has vast experience working in residential treatment settings such as Vista Adolescent Treatment Center, Alpine Academy, and currently at Westridge Academy Residential Treatment Center. Her subsequent years of training and experience also include case management with Vietnamese and Somalian refugees, individual and family therapy with Catholic Community Services, with sex offenders through Center for Family Development, and substance abuse treatment with Cornerstone Counseling Center. Jackie has a variety of experience working with disorders including: Adoption/Reactive Attachment & Adjustment Disorders, Autism Spectrum Disorders, ADD/ADHD, Personality & Mood Disorders, PTSD, Self-Harm and Sexual Abuse, and several others. Jackie’s passion is working with children, adolescents and their families.
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
