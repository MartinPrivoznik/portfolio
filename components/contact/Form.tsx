"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Form, Formik } from "formik";
import { string, object } from "yup";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { ContactFormType } from "@/types";
import RunningButton from "./RunningButton";

interface IContactFormInputProps {
  loading: boolean;
  handleSubmit: (values: ContactFormType) => {};
  errorSendingEmail: boolean;
}

export const ContactFormInputs = ({
  loading,
  handleSubmit,
  errorSendingEmail,
}: IContactFormInputProps) => {
  const contactFormInitialProps = {
    fullName: "",
    email: "",
    text: "",
  } as ContactFormType;

  const contactFormValidationSchema = object().shape({
    fullName: string()
      .required("Field required")
      .max(100, "Enter a maximum of 80 characters"),
    email: string()
      .email("Enter a valid email address")
      .required("Field required")
      .max(100, "Enter a maximum of 80 characters"),
    text: string()
      .required("Field required")
      .max(1000, "Enter a maximum of 1000 characters"),
  });

  return (
    <Formik
      initialValues={contactFormInitialProps}
      validationSchema={contactFormValidationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
      }}
    >
      {(props) => {
        return (
          <Form>
            <div className="flex flex-col sm:flex-row w-full gap-5">
              <Input
                type="text"
                variant="bordered"
                label="Full name"
                name="fullName"
                value={props.values.fullName}
                onChange={props.handleChange}
                onBlur={() => {
                  props.setFieldTouched("fullName", true);
                }}
                size="lg"
                isInvalid={
                  props.errors.fullName && props.touched.fullName ? true : false
                }
                errorMessage={
                  props.touched.fullName ? props.errors.fullName : undefined
                }
                isReadOnly={loading}
                isRequired
              />
              <Input
                type="email"
                variant="bordered"
                label="Your email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={() => {
                  props.setFieldTouched("email", true);
                }}
                size="lg"
                isInvalid={
                  props.errors.email && props.touched.email ? true : false
                }
                errorMessage={
                  props.touched.email ? props.errors.email : undefined
                }
                isReadOnly={loading}
                isRequired
              />
            </div>
            <Textarea
              className="mt-3"
              variant="bordered"
              label="Tell me about your project"
              name="text"
              value={props.values.text}
              onChange={props.handleChange}
              onBlur={() => {
                props.setFieldTouched("text", true);
              }}
              size="lg"
              isInvalid={props.errors.text && props.touched.text ? true : false}
              errorMessage={props.touched.text ? props.errors.text : undefined}
              isReadOnly={loading}
              isRequired
            />
            <div className="flex flex-col md:flex-row w-full mt-4">
              <div className="w-full md:w-2/3">
                {errorSendingEmail && (
                  <p className="text-danger">
                    An error occured while trying co send an email. Try
                    contacting me directly on my email address:
                    marprivoznik@gmail.com
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-end">
                <RunningButton
                  validationSchema={contactFormValidationSchema}
                  formData={props.values}
                  loading={loading}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
