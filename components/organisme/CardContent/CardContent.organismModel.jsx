import { useSearchSelector, useSearchTypeSelector } from '@/config/redux/search/searchSelector.reducer';
import { retrieveSearch } from '@/config/redux/search/searchThunk.reducer';

const useCardContentOrganismModel = () => {
  const search = useSearchSelector();
  const type = useSearchTypeSelector();

  const loading = type === retrieveSearch.pending.type;

  return { loading, search };
};

export default useCardContentOrganismModel;
