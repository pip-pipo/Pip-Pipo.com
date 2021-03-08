import React, { useState } from "react";
import "./Contact.css";
import contact from "../images/contact.svg";
import { motion } from "framer-motion";
import Firebase from "./services/Firebase";

const Contact = () => {
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [showerrfont, setShowerrfont] = useState("fas fa-exclamation-circle");
 
  const [datas, setDatas] = useState({
    email: "",
    title: "",
    message: "",
  });
  const { email, title, message } = datas;

  const submitHandelr = async (e) => {
    e.preventDefault();
    if (email === "" || title === "" || message === "") {
      setErr(true);
      setErrmsg("please fill all fields");
      setTimeout(() => {
        setErr(false);
        setErrmsg("");
      }, 1000);
    } else {
      const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(email)) {
        if (title.length <= 6) {
          setErr(true);
          setErrmsg("Title can't be  less then 6 char");
          setTimeout(() => {
            setErr(false);
            setErrmsg("");
          }, 1000);
        } else {
          await Firebase.firestore().collection("contact").doc().set(datas);
          setErr(true);
          setErrmsg("Thnaks for sending your message");
          setShowerrfont("far fa-check-circle");
          setTimeout(() => {
            setErr(false);
            setErrmsg("");
            setDatas({
              email: "",
              title: "",
              message: "",
            });
          }, 1000);
        }
      } else {
        setErr(true);
        setErrmsg("Email is not valid");
        setTimeout(() => {
          setErr(false);
          setErrmsg("");
        }, 1000);
      }
    }
  };

  const inputHnadelr = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <h3 className="contact__logo">Contact </h3>
      <div className="contact__container">
        <div className="text">
          <form className="form" noValidate onSubmit={submitHandelr}>
            <h2>Send Your Message</h2>
            <h3>
              {" "}
              <i class={err ? showerrfont : ""}></i>{" "}
              {err ? <span> {errmsg} </span> : ""}
            </h3>
            <input
              onChange={inputHnadelr}
              type="text"
              name="email"
              value={email}
              placeholder="example123@gmail.com"
            />
            <input
              onChange={inputHnadelr}
              type="text"
              name="title"
              value={title}
              placeholder="whay i should choose you?"
            />
            <textarea
              onChange={inputHnadelr}
              name="message"
              value={message}
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your Message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className="img">
          <motion.img
            animate={{
              x: -84,
              y: 10,
              scale: 0.9,
              rotate: 0,
            }}
            src={contact}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
