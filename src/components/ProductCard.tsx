import { FragmentType, getFragmentData } from '@/gql';
import { ProductFragment } from '@/graphql/fragments';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProductCard = ({
  item,
}: {
  item: FragmentType<typeof ProductFragment>;
}) => {
  const { t } = useTranslation();
  const product = getFragmentData(ProductFragment, item);

  return (
    <div className="w-11/12 m-auto bg-gray-200 dark:bg-gray-500 text-black dark:text-white border-2 border-transparent rounded-sm">
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <div className="col-span-1 dark:bg-gray-500">
          <img className="p-1 object-cover" src={product.imgUrl} />
        </div>
        <div>
          <h3 className="text-base sm:text-md font-medium">{product.name}</h3>
          <div className="text-sm sm:text-base">
            {product.slogan && (
              <p className="text-sm sm:text-base">{product.slogan}</p>
            )}
            <p className="text-black dark:text-green-400">
              list price: ${product.listPrice} USD
            </p>
          </div>
          <div className="mb-1">
            <Link
              className="border-2 border-transparent rounded-sm bg-amber-500 hover:bg-yellow-400"
              to={`/products/${product.gtin}`}
            >
              {t('ProductDetails')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
