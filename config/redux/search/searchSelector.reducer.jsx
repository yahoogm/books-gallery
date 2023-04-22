import { useSelector } from 'react-redux';

export const useSearchSelector = () => useSelector((state) => state.search.search);

export const useSearchTypeSelector = () => useSelector((state) => state.search.type);
