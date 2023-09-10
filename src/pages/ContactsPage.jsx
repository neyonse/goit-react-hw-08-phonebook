import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useLogOutRedirect();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <>
      <Section className="addContactSection" title="Phonebook">
        <AddContactForm />
      </Section>
      {isLoading && !error && (
        <p style={{ textAlign: 'center', color: 'orange' }}>
          Request in progress...
        </p>
      )}
      {error && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Ooops! Something went wrong, please try again...
        </p>
      )}
      {contacts.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </>
  );
};
