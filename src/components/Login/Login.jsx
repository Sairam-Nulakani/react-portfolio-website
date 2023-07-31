import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const signUp = JSON.parse(localStorage.getItem("signUp"));
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      password: Yup.string().max(15).required("Password is Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        useEffect(() => {
          if (
            values.email === data.email &&
            values.password === data.password
          ) {
            navigate("/home");
          } else if (data === null) {
            alert("you are not registered with this email");
          } else {
            console.log("test");
            // alert("Please Enter Valid Credentials"); // <-- It might be better to remove this alert and handle the validation message within the form itself.
            resetForm();
          }
        }, [values, data]);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <section>
      <h2>Login-Form</h2>
      <form
        className="container signup__container"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="signup__input"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
        <input
          type="password"
          placeholder="Enter Your Password"
          className="signup__input"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <span>{formik.errors.password}</span>
        )}
        <p>
          Not Registered ?<Link to="/">Sign-Up</Link>
        </p>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
