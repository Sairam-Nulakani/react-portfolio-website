import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      password: Yup.string().max(10).required("Password is Required"),
    }),
  });
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Sairam"));
    console.log(data);
  }, []);

  const handleSubmit = () => {};
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
          type="text"
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
        <button
          className="btn btn-primary"
          type="submit"
          onSubmit={handleSubmit}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
