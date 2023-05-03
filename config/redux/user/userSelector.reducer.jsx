import { useSelector } from 'react-redux';

export const useUserSelector = () => useSelector((state) => state.user.user);
