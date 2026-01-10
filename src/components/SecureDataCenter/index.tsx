import FileList from '@/components/SecureDataCenter/FileList';
import { AllProjectsOrderBy, OrderDirection } from '@/gql/graphql';
import useProject from '@/hooks/useProject';

const SecureDataUI = () => {
  const orderByDefault = {
    orderBy: AllProjectsOrderBy.CreatedAt,
    orderDirection: OrderDirection.Desc,
  };
  const { variables, service } = useProject();
  const { orderDirection } = variables;

  return (
    <div className="w-full p-2">
      <h3 className="text-sm sm:text-base font-medium">Sort Option</h3>
      <div className="flex space-x-2 text-red-600">
        <div>
          <input
            id="oldest"
            className="peer/oldest"
            type="radio"
            checked={orderDirection === OrderDirection.Asc}
            onChange={() =>
              service.setVariables({
                ...variables,
                orderBy: orderByDefault.orderBy,
                orderDirection: OrderDirection.Asc,
              })
            }
          />
          <label
            htmlFor="oldest"
            className="peer-checked/oldest:text-green-600"
          >
            Oldest
          </label>
        </div>
        <div>
          <input
            id="latest"
            className="peer/latest"
            type="radio"
            checked={orderDirection === OrderDirection.Desc}
            onChange={() =>
              service.setVariables({ ...variables, ...orderByDefault })
            }
          />
          <label
            htmlFor="latest"
            className="peer-checked/latest:text-green-600"
          >
            Latest
          </label>
        </div>
      </div>
      <div>
        <input
          className="peer w-5/6 border-2 rounded-sm border-red-800 focus:border-red-600 outline-none"
          placeholder="name / title"
          type="search"
          id="keyword"
          defaultValue={variables.searchKeyword}
          onChange={service.onKeywordChange}
        />
      </div>
      <FileList variables={variables} setVariables={service.setVariables} />
    </div>
  );
};

export default SecureDataUI;
