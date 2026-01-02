import { TFunction } from "i18next";
import { object, string } from "yup";

export const contactFormValidationSchema = (
  t: TFunction<string, undefined>
) => {
  return object().shape({
    fullName: string()
      .required(t("fieldRequired"))
      .max(100, t("enterMaximumOf80Chars")),
    email: string()
      .email(t("enterValidEmailAddress"))
      .required(t("fieldRequired"))
      .max(100, t("enterMaximumOf80Chars")),
    text: string()
      .required(t("fieldRequired"))
      .max(1000, t("enterMaximumOf1000Chars")),
    captchaToken: string()
      .required(t("captchaRequired")),
  });
};
