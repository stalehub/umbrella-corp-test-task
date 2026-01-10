import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MobileSideBarButton = ({
  labelValue,
  path,
}: {
  labelValue: string;
  path: string;
}) => {
  const { t } = useTranslation();

  return (
    <button className="w-full bg-red-600 hover:bg-red-400" value={labelValue}>
      <Link
        className="text-black text-sm no-underline text-base text-wrap"
        to={path}
      >
        {t(`${labelValue}`)}
      </Link>
    </button>
  );
};

export default MobileSideBarButton;
