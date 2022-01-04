import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

// require("dotenv").config();

export default function Form() {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const appServiceKey: string | any = process.env.REACT_APP_SERVICE_KEY;
  const appTemplateKey: string | any = process.env.REACT_APP_TEMPLATE_KEY;
  const appUserKey: string | any = process.env.REACT_APP_USER_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    //Reset after submit
    setName("");
    setEmail("");
    setMessage("");

    emailjs.sendForm(appServiceKey, appTemplateKey, appUserKey).then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <h2>Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
