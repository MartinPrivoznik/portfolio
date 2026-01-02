"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Form, Formik } from "formik";
import { ContactFormType } from "@/types";
import RunningButton from "./RunningButton";
import { useTranslation } from "@/app/i18n/client";
import { contactFormValidationSchema } from "@/validators/contactFormValidationSchema";
import { Turnstile } from "@marsidev/react-turnstile";

interface IContactFormInputProps {
  loading: boolean;
  handleSubmit: (values: ContactFormType) => {};
  errorSendingEmail: boolean;
  lang: string;
}

export const ContactFormInputs = ({
  loading,
  handleSubmit,
  errorSendingEmail,
  lang,
}: IContactFormInputProps) => {
  const { t } = useTranslation(lang);

  const contactFormInitialProps = {
    fullName: "",
    email: "",
    text: "",
    captchaToken: "",
  } as ContactFormType;

  return (
    <Formik
      initialValues={contactFormInitialProps}
      validationSchema={contactFormValidationSchema(t)}
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
                label={t("fullName")}
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
                label={t("yourEmail")}
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
              label={t("tellMeAboutYourProject")}
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
                    {t("contactFormSubmissionError")}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-end">
                <RunningButton
                  validationSchema={contactFormValidationSchema(t)}
                  formData={props.values}
                  loading={loading}
                  text={t("sendEmail")}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                  "1x00000000000000000000AA"
                }
                onSuccess={(token) => {
                  props.setFieldValue("captchaToken", token);
                }}
                onError={() => {
                  props.setFieldValue("captchaToken", "");
                }}
                onExpire={() => {
                  props.setFieldValue("captchaToken", "");
                }}
              />
              {props.errors.captchaToken && props.touched.captchaToken && (
                <p className="text-danger text-sm mt-1">
                  {props.errors.captchaToken}
                </p>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
