import { SendNotify } from '@/components/NotifyHandler';
import ProductCard from '@/components/ProductCard';
import LoadingScreen from '@/components/UmSysCtrl/LoadingScreen';
import NoDataFound from '@/components/UmSysCtrl/NoDataFound';
import { GetAllProductsQueryDocument } from '@/gql/graphql';
import { useQuery } from '@apollo/client';

const SearchResultPage = () => {
  const { data, loading } = useQuery(GetAllProductsQueryDocument, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  if (!data) {
    return <NoDataFound />;
  }

  const productEdges = data?.allProducts?.edges;

  return (
    <div className="w-screen bg-white dark:bg-gray-800">
      <div>
        <h1 className="text-red-600 font-bold text-center">
          All Popular Products
        </h1>
        <div className="w-3/4 m-auto bg-gray-400 dark:bg-gray-600 pt-1 pb-1 flex flex-col gap-1">
          {productEdges &&
            productEdges.map(
              (e, i) =>
                e?.node && <ProductCard key={`product-${i}`} item={e.node} />
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
