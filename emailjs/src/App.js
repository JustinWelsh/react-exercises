import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  // emailjs.send("service_urqzrqa","contact_form");
  const MY_PUBLIC_KEY = "fOaIFpDdCUHBz1kLf";
  const MY_SERVICE_ID = "service_urqzrqa";
  const MY_TEMPLATE_ID = "contact_form";
  const form = useRef();
  const log = () => alert(form.current);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(MY_SERVICE_ID, MY_TEMPLATE_ID, form.current, MY_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="App">
      <h1>EmailJS Exercise</h1>
      <form ref={form} onSubmit={sendEmail} className="form-body">
        <input
          type="text"
          id="fullname_id"
          placeholder="Full Name"
          name="from_name"
          required
        />
        <br />
        <input
          type="email"
          id="email_id"
          placeholder="Email"
          name="email"
          required
        />
        <br />
        <textarea id="message" placeholder="Message" name="message" required />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
