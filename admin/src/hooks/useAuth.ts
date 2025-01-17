import { useAppSelector } from '~app/store';

const useAuth = () => {
  const { isAuthenticated, user } = useAppSelector(state => state.auth);
  return { isAuthenticated, user };
};

export default useAuth;
