import { tokenVar } from '@/apollo-cache/cache';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import TopNaviButton from './TopNaviButton';

const Flexible = () => {
  const { t } = useTranslation();
  const client = useApolloClient();
  // Use makeVar() will not cause re-render component
  const token = useReactiveVar(tokenVar);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    client.resetStore();
    // Clear local state of token field
    tokenVar(null);
  };

  if (token) {
    return (
      <div className="flex space-x-1 text-xs sm:text-sm font-medium text-white dark:text-white bg-gray-200 dark:bg-black dark:text-white">
        <TopNaviButton labelValue="Lab" path="/security" />
        <button
          className="p-0.5 border-2 border-slate-800 rounded bg-slate-400 dark:bg-red-800 hover:bg-red-600"
          onClick={handleLogOut}
        >
          {t('LogOut')}
        </button>
      </div>
    );
  }

  return (
    <div className="w-fit flex space-x-1 text-sm font-medium text-white dark:text-white bg-gray-200 dark:bg-black dark:text-white">
      <TopNaviButton labelValue="SignIn" path="/signin" />
      <TopNaviButton labelValue="SignUp" path="/signup" />
    </div>
  );
};

export default Flexible;
