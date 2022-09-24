import * as yup from 'yup';

export const validationSchemaSignUp = yup.object().shape({
  firstName: yup
    .string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: yup.string().email('Email is invalid').required('Required'),
  password: yup
    .string()
    .min(1, 'Password  must be at least 1 character')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});
