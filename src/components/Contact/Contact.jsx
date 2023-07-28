import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TiTick } from "react-icons/ti";

const data = [
  {
    icon: <HiOutlineMail />,
    title: "Email",
    contactOption: "sairamnulakani4@gmail.com",
    link: "mailto:dummyoneplustv3367@gmail.com",
  },
  {
    icon: <BsMessenger />,
    title: "Messenger",
    contactOption: "https://www.messenger.com",
    link: "https://m.me/sairam.nulakani",
  },
  {
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    contactOption: "9603833672",
    link: "https://api.whatsapp.com/send?phone=+919603833672",
  },
];

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Name must be 3-20 Characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6obk68r",
        "template_ezdc9t6",
        form.current,
        "6PzkPSxk5eSo4vvEX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsMessageSent(true);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {data.map((item) => (
            <article className="contact__option">
              <p className="contact__option-icon">{item.icon}</p>
              <h4>{item.title}</h4>
              <h5 className="contact__message">{item.contactOption}</h5>
              <a href={item.link} target="_blank">
                Send a Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </span>
          <input
            type="email"
            name="email"
            placeholder="Your E-Mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </span>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <span>
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : ""}
          </span>
          <button
            type="submit"
            onSubmit={formik.handleSubmit}
            className="btn btn-primary"
          >
            Send Message
          </button>
          {isMessageSent && (
            <p className="sent">
              <TiTick />
              Message Sent
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
