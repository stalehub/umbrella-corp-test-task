import { IProjectQueryVars } from '@/@types/types';
import { AllProjectsOrderBy, OrderDirection } from '@/gql/graphql';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';

const useProject = () => {
  const [variables, setVariables] = useState<IProjectQueryVars>({
    first: 10,
    offset: 0,
    searchKeyword: '',
    orderBy: AllProjectsOrderBy.CreatedAt,
    orderDirection: OrderDirection.Desc,
  });

  // Handling keyword changes and reduce server load
  const setKeyword = (value: string) =>
    setVariables({ ...variables, searchKeyword: value });

  const debouncedSave = useRef(
    debounce((value: string) => setKeyword(value), 1500)
  ).current;

  const onKeywordChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    // Even though handleChange is created on each render and executed,
    // it references the same debouncedSave that was created initially.
    debouncedSave(target.value);
  };

  const service = { setVariables, onKeywordChange };

  return {
    variables,
    service,
  };
};

export default useProject;
