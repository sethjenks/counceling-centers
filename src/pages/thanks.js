import React from "react";
import { Link, graphql } from 'gatsby'

export default () => (
  <div>
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <div className="section">
          <h1 className="title is-size-1 has-text-weight-bold is-bold-light">Thank you!</h1>
          <h4 className="title is-size-4">We have recieved your message and will be in contact shortly.</h4>
          <Link className="button is-medium" to="/">
            Return Home
          </Link>
          </div>
        </div>
        <div className="column is-8">
          <div className="section">

          </div>
        </div>
      </div>
    </div>
  </section>




  </div>
);
