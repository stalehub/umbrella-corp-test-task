import { useTranslation } from 'react-i18next';

const UmbrellaLabel = ({ title }: { title: string }) => {
  const { t } = useTranslation();

  return (
    <span className="flex justify-center">
      <img
        className="w-6 h-6 object-cover"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ef2de4b-0e30-4c7b-b332-7cb148208bba/d6a05is-e5579d37-35ce-499c-8f47-740006b50b66.png/v1/fill/w_300,h_250/umbrella_logo___stock_by_mughalrox_d6a05is-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvNmVmMmRlNGItMGUzMC00YzdiLWIzMzItN2NiMTQ4MjA4YmJhXC9kNmEwNWlzLWU1NTc5ZDM3LTM1Y2UtNDk5Yy04ZjQ3LTc0MDAwNmI1MGI2Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4xfcCREuQ5NB2J4GyL-TYha47oCO-KOVn-xG4t5lBzE"
      />
      <h3 className="text-sm sm:text-base font-bold text-center text-black dark:text-red-600">
        {t(`${title}`)}
      </h3>
    </span>
  );
};

export default UmbrellaLabel;
