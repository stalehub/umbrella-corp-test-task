import Flexible from '@/components/TopNaviBar/Flexible';
import ResilientSearchBar from '@/components/TopNaviBar/ResilientSearchBar';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import MobileCollapsedSideBar from '@/mobile/collapsed/MobileCollapsedSideBar';
import { Link } from 'react-router-dom';

const MobileTopNaviBar = () => {
  return (
    <div className="w-screen flex flex-col bg-gray-200 text-center dark:bg-black dark:text-white">
      <div className="h-10 sm:h-12 flex gap-1 sm:w-1/2 sm:m-auto items-center text-sm font-medium text-white dark:text-white">
        <Link
          className="w-14 pt-0.5 sm:w-24 text-xs dark:text-white text-black"
          to="/"
        >
          <UmbrellaLabel title="Ub" />
        </Link>
        <Flexible />
        <MobileCollapsedSideBar />
      </div>
      <ResilientSearchBar />
    </div>
  );
};

export default MobileTopNaviBar;
