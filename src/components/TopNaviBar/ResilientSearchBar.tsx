import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

const ResilientSearchBar = () => {
  const { pathname } = useLocation();
  const displayStyle: string = pathname.includes('security') ? 'hidden' : '';

  return (
    <div
      className={`${displayStyle} w-full h-8 bg-amber-400 flex justify-center items-center`}
    >
      <span className="flex w-40 sm:w-60 border-2 border-transparent rounded-sm hover:border-orange-400">
        <input
          className="w-32 h-6 sm:w-48 outline-none border-2 border-transparent rounded-l-sm text-black"
          placeholder="type keyword"
        />
        <Link
          className="w-10 h-6 sm:w-14 border-1 border-transparent rounded-r-sm bg-amber-500 hover:bg-amber-400"
          to="/products/search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </span>
    </div>
  );
};

export default ResilientSearchBar;
