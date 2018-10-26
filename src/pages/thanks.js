import React from "react";
import { Link, graphql } from 'gatsby'

export default () => (
  <div>
    <h1>Thank you!</h1>
    <p>We have recieved your message and will be in contact shortly</p>
    <Link className="button is-primary" to="/">
      Return Home
    </Link>
  </div>
);
