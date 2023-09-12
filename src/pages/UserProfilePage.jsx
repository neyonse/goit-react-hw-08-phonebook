import { UserProfile } from 'components/UserProfile';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const UserProfilePage = () => {
  useLogOutRedirect();

  return <UserProfile />;
};
