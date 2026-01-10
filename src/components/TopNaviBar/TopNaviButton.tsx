import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TopNaviButton = ({
  labelValue,
  path,
}: {
  labelValue: string;
  path: string;
}) => {
  const { t } = useTranslation();

  if (window.screen.width < 811) {
    return (
      <button
        className="w-14 bg-slate-400 border-2 rounded-sm border-black dark:bg-black hover:bg-red-600"
        value={labelValue}
      >
        <Link
          className="text-black dark:text-white text-sm no-underline text-base text-wrap"
          to={path}
        >
          {t(`${labelValue}`)}
        </Link>
      </button>
    );
  }

  return (
    <Link
      className="p-0.5 border-2 border-slate-800 rounded bg-slate-400 dark:bg-red-800 hover:bg-red-600"
      to={path}
    >
      {t(`${labelValue}`)}
    </Link>
  );
};

export default TopNaviButton;
