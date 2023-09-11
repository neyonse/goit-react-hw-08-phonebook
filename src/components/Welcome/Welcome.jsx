import { Section } from 'components/Section';
import { NavLink } from 'react-router-dom';
import css from './Welcome.module.css';

export const Welcome = () => {
  return (
    <Section className="welcomeSection" title="Welcome to the Phonebook!">
      <div className={css.welcomeMessage}>
        <p>
          <NavLink to="/login" className={css.loginLink}>
            Log in
          </NavLink>{' '}
          to view your contacts
        </p>
        <p>or</p>
        <p>
          <NavLink to="/signup" className={css.signupLink}>
            sign up
          </NavLink>{' '}
          if you don't have an account yet.
        </p>
      </div>
    </Section>
  );
};
