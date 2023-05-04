import { useSelector } from 'react-redux';

export const useUserSelector = () => useSelector((state) => state.user.user);

export const useIsLoginSelector = () =>
  useSelector((state) => state.user.isLogin);
