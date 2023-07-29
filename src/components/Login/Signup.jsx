import React, { useRef, useState } from "react";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const submitHandler = () => {};
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name Must be 3-20 Characters")
        .required("Name is Required"),
      phoneNumber: Yup.string()
        .min(10, "Mobile Number must be 10")
        .required("Mobile Number is Required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      password: Yup.string().max(10).required("Password is Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        if (formik.values.password === formik.values.confirmPassword) {
          localStorage.setItem(`${values.name}`, JSON.stringify(values));

          alert("Signup Successfully");
          resetForm();
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <section>
      <h5>If you want to see my Portfolio-Please Signup</h5>
      <h2>SignUp-Form</h2>
      <form
        className="container signup__container"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          className="signup__input"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          className="signup__input"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <span>{formik.errors.phoneNumber}</span>
        )}
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
        <input
          type="text"
          placeholder="Confirm Password"
          className="signup__input"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span>{formik.errors.confirmPassword}</span>
        )}
        <span>
          Already Registered ? <Link to="/login">Sign-in</Link>
        </span>
        <button className="btn btn-primary" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Signup;
