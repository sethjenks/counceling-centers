import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="box">
        <form
          name="ccu-contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="field">
            <div className="control">
              <label>
                Your full name<br />
              <input className="input is-large" type="text" name="name" onChange={this.handleChange} />
            </label>
          </div>
          </div>
          <div className="field">
            <div className="control">
              <label>
                Your email<br />
                <input className="input is-large" type="email" name="email" onChange={this.handleChange} />
            </label>
          </div>
          </div>
          <div className="field">
            <div className="control">
              <label>
                Your phone<br />
                <input className="input is-large" type="tel" name="email" onChange={this.handleChange} />
            </label>
          </div>
          </div>
          <div className="field">
            <div className="control">
              <label>
                What kind of services are you seeking?<br />
                <textarea className="textarea is-large" name="message" onChange={this.handleChange} />
            </label>
          </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary is-medium" type="submit">Request more information</button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}
