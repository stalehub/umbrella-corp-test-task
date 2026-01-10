import { BOWProps } from '@/@types/types';

const ProjectModel = ({ model }: { model: BOWProps }) => {
  const {
    codeName,
    version,
    characteristics,
    experimentalType,
    massProducted,
    imgUrl,
    based,
    height,
    length,
    mass,
    createdVia,
  } = model;

  return (
    <div className="w-screen md:w-[800px] h-fit dark:text-white">
      <div className="w-11/12 sm:6/7 m-auto border-2 rounded-sm bg-stone-200 dark:bg-stone-400">
        <div className="grid grid-cols-1 sm:grid-cols-2 p-1">
          <div className="col-span-1">
            <h1 className="text-red-600">Project / Experiment Code:</h1>
            <h2 className="dark:text-amber-400">{codeName}</h2>
            <img
              className="border-2 border-transparent rounded-md p-0.5"
              src={imgUrl}
              alt="model photo"
            />
          </div>
          <div className="pl-2">
            <p>Model Version: {version}</p>
            <p>ExperimentalType: {experimentalType ? 'true' : 'false'}</p>
            <p>Mass-produced: {massProducted ? 'true' : 'false'}</p>
            {based && based.length > 0 && (
              <ul>
                based:{' '}
                {based.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            )}
            {height && <p>height: {height}</p>}
            {length && <p>length: {length}</p>}
            {mass && <p>mass: {mass}</p>}
            {createdVia && createdVia.length > 0 && (
              <ul>
                created via:{' '}
                {createdVia.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="p-1">
          <h3 className="italic text-base font-medium">Characteristics</h3>
          <p>{characteristics}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;
