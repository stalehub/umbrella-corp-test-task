import { SendNotify } from '@/components/NotifyHandler';
import LoadingScreen from '@/components/UmSysCtrl/LoadingScreen';
import NoDataFound from '@/components/UmSysCtrl/NoDataFound';
import { FragmentType, getFragmentData } from '@/gql';
import { GetProductQueryDocument } from '@/gql/graphql';
import { ProductFragment } from '@/graphql/fragments';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const id = useParams().id || '';
  const { t } = useTranslation();
  const { data, loading } = useQuery(GetProductQueryDocument, {
    variables: { productId: id },
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) return <LoadingScreen />;

  if (!data || !data.findProductById) return <NoDataFound />;

  const ProductProps: FragmentType<typeof ProductFragment> =
    data.findProductById;
  const item = getFragmentData(ProductFragment, ProductProps);

  return (
    <div className="w-screen min-h-svh bg-gray-200 dark:bg-slate-400">
      <div className="p-1 w-8">
        <Link
          className=" border-2 border-transparent rounded-sm text-white bg-red-600 hover:bg-red-400"
          to="/products/search"
        >
          {t('Back')}
        </Link>
      </div>
      <div className="w-11/12 m-auto grid grid-cols-2">
        <div className="p-1">
          <img src={item.imgUrl} />
        </div>
        <div className="col-span-1 text-sm sm:text-base text-black">
          <h3 className="font-medium">{item.name}</h3>
          <p>list price: ${item.listPrice} USD</p>
        </div>
      </div>
      <div className="w-11/12 m-auto text-xs sm:text-sm">
        <h3 className="text-sm sm:text-base font-medium">
          {t('ProductDesc', { ns: 'product' })}
        </h3>
        <p>
          <strong>{item.slogan && item.slogan}</strong>
        </p>
        <p>{item.description}</p>
      </div>
      <div className="p-1">
        <h3 className="font-medium">{t('ProductInfo', { ns: 'product' })}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 text-sm gap-0.5">
          <div className="col-span-1 sm:col-span-2 bg-gray-400 dark:text-white dark:bg-slate-600 font-medium">
            GTIN
          </div>
          <div className="sm:col-span-2 overflow-scroll">{item.gtin}</div>
          <div className="col-span-1 sm:col-span-2 bg-gray-400 dark:text-white dark:bg-slate-600 font-medium">
            Pulished Date
          </div>
          <div className="sm:col-span-2">{item.info.pulishedDate}</div>
          <div className="col-span-1 sm:col-span-2 bg-gray-400 dark:text-white dark:bg-slate-600 font-medium">
            Manufacturer
          </div>
          <div className="sm:col-span-2 overflow-scroll">
            {item.info.manufacturer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
