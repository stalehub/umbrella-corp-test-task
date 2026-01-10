import SecureDataUI from '@/components/SecureDataCenter';
import ROPLSInfo from '@/components/UmSysCtrl/ROPLSInfo';
import RoplsScreen from '@/components/UmSysCtrl/ROPLSScreen';
import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-fit p-1 flex flex-col gap-1.5 sm:gap-2 bg-gradient-to-b from-green-900 to-lime-900">
      <TopMessageBoard />
      <RoplsScreen />
      <div className="relative w-11/12 h-86 gap-1 sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600 opacity-85">
        <div className="flex flex-col justify-center m-2 border-2 border-transparent rounded-sm border-slate-400 bg-gray-200">
          <h2 className="italic text-red-600 text-center bg-black">
            {t('System.CTRL', { ns: 'umbrellaSecurity' })}
          </h2>
          <span className="text-black italic">
            {`For other documents, visit `}
            <Link className="text-orange-600" to="/security/archives">
              archives
            </Link>
            .
          </span>
          <SecureDataUI />
        </div>
      </div>
      <ROPLSInfo />
    </div>
  );
};

export default SecurityPage;
