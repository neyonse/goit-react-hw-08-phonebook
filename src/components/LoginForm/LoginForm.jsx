import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from 'redux/operations';
import { logIn } from 'redux/userSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

// const schema = yup.object({
//   email: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required(`Name field can't be empty`),
//   password: yup
//     .string()
//     .matches(
//       /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required(`Phone number field can't be empty`),
// });

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;
    const email = values.email;

    // const isRegistered = isUserAlreadyRegistered(name);

    // if (isAdded !== -1) {
    //   alert(`${name} is already in contacts`);
    //   resetForm();
    //   return;
    // }

    // dispatch(loginUser({ email, password }));
    dispatch(logIn(email));
    resetForm();
    navigate('/contacts', { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            required
          />
          <ErrorMessage name="password" component="p" className={css.error} />
        </label>
        <button className={css.submitBtn} type="submit" aria-label="log in">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
