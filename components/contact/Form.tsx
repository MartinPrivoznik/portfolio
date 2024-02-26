"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Reveal } from "../animations/Reveal";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { ContactFormType } from "@/types";

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

  const contactFormValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Field required")
      .max(100, "Enter a maximum of 80 characters"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Field required")
      .max(100, "Enter a maximum of 80 characters"),
    text: Yup.string()
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
            <div className="flex flex-col md:flex-row w-full mt-4 items-center">
              {errorSendingEmail && (
                <p className="text-danger">
                  An error occured while trying co send an email. Try contacting
                  me directly on my email address: marprivoznik@gmail.com
                </p>
              )}

              <Button
                type="submit"
                className="ml-auto mt-3 md:mt-0"
                color="primary"
                disabled={loading}
              >
                Send email
                {loading && <Spinner color="default" size="sm" />}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
