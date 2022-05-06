import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
);

export default Yup.object().shape({
  email: Yup.string().email("Invalid Email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      passwordRegex,
      "Must have Upper and Lowercase letters, a number, and a special character."
    ),
});
