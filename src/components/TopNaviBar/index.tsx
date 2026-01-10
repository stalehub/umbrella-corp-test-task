import ToggleTheme from '@/components/ToggleTheme';
import ResilientSearchBar from '@/components/TopNaviBar/ResilientSearchBar';
import TopNaviButton from '@/components/TopNaviBar/TopNaviButton';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import MobileTopNaviBar from '@/mobile/components/MobileTopNaviBar';
import { Link } from 'react-router-dom';
import Flexible from './Flexible';

const TopNaviBar = () => {
  const mobileMode: boolean = window.screen.width < 811;

  if (mobileMode) {
    return <MobileTopNaviBar />;
  }

  return (
    <div className="w-screen flex flex-col bg-stone-200 text-center dark:bg-black dark:text-white">
      <div className="flex gap-1.5 justify-center items-center italic text-sm font-medium text-white dark:text-white">
        <Link className="w-24 block bg-gray-200 dark:bg-black italic" to="/">
          <UmbrellaLabel title="Umbrella" />
        </Link>
        <TopNaviButton labelValue="HotProducts" path="/products/search" />
        <Flexible />
        <TopNaviButton labelValue="Recruitment" path="/recruitment" />
        <TopNaviButton labelValue="About" path="/about" />
        <TopNaviButton labelValue="Materials" path="/materials" />
        <ToggleTheme />
      </div>
      <ResilientSearchBar />
    </div>
  );
};

export default TopNaviBar;
