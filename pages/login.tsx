import React from "react";
import { Formik, Form, Field } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { loginAction } from "../request";
import { ADD_USER_INFO } from "../reducers/user";
import store from "../store/index";
export default function Login() {
  return (
    <div
      css={`
        background: #1f2937;
        height: 100vh;
      `}
      className="flex items-center justify-center relative"
    >
      <div
        className="flex items-center justify-center mx-auto bg-white p-4 "
        css={`
          height: 400px;
          width: 400px;
        `}
      >
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={(values) => {
            const errors: any = {};

            if (!values.username) {
              errors.username = "username is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const reqBody: any = {
              username: values.username,
              password: values.password,
            };
            await loginAction(reqBody);
            store.dispatch({
              type: ADD_USER_INFO,
              payload: reqBody,
            });
            setSubmitting(false);
            window.location.href = "/hrm/leave/my-leaves";
          }}
          render={(formikBag) => {
            return (
              <Form>
                <div className="mb-5 mx-auto flex items-center justify-center">
                  <h2 className="text-4xl">Login</h2>
                </div>
                <div className="mb-2 relative ">
                  <HiOutlineMail
                    className="absolute"
                    css={`
                      top: 50%;
                      left: 10px;
                      transform: translateY(-50%);
                    `}
                    size={25}
                  />
                  <label className="">
                    <Field
                      name="username"
                      className="form-input"
                      css={`
                        padding-left: 3rem !important;
                        padding-right: 3rem !important;
                      `}
                      placeholder="Username Address"
                    />
                  </label>
                </div>
                <div className="relative">
                  <FiSettings
                    className="absolute"
                    css={`
                      top: 50%;
                      left: 10px;
                      transform: translateY(-50%);
                    `}
                    size={20}
                  />

                  <label>
                    <Field
                      name="password"
                      className="form-input"
                      css={`
                        padding-left: 3rem !important;
                        padding-right: 3rem !important;
                      `}
                      placeholder="Password"
                    />
                  </label>
                </div>
                <button
                  disabled={formikBag.isSubmitting}
                  type="submit"
                  className="flex items-center justify-center mx-auto bg-blue-700  py-2 px-8 mt-6 rounded-sm text-white h-full align-middle"
                >
                  LOG IN{" "}
                </button>
              </Form>
            );
          }}
        />
      </div>
    </div>
  );
}
