import { Founders } from '@/dummyData';

const AboutPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center bg-gray-400 dark:bg-gray-800">
      <h1 className="text-center text-red-600 text-base font-bold sm:text-md">
        About us
      </h1>
      <article className="pl-2 pr-2">
        <p className="text-base sm:text-base dark:text-white">
          The Umbrella Corporation is a multinational conglomerate with
          subsidiaries active in a variety of industries from the 1980s to the
          early 2000s.
        </p>
        <p className="text-base sm:text-base dark:text-white">
          Umbrella had influence in the production and sale of cosmetics,
          chemicals, pharmaceuticals, industrial machine production, consumer
          products, health foods, the transportation industry and tourism.
        </p>
        <hr className="w-11/12 pl-2 pr-2" />
      </article>
      <div className="w-11/12 m-auto sm:text-base dark:text-white">
        <h2 className="font-medium text-base sm:text-md">Founders</h2>
        {Founders.map((founder, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              <div className="col-span-1">
                <img
                  className="object-cover border-2 rounded-sm border-red-600 md:w-[450px]"
                  src={founder.portrait}
                />
              </div>
              <div className="overflow-auto sm:col-span-2 md:col-span-3 p-1">
                <h3>{founder.founderName}</h3>
                <h4 className="text-sm sm:text-base text-yellow-500">
                  {founder.occupation.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </h4>
                <p className="hidden sm:block text-xs sm:text-sm md:text-md">
                  {founder.intro}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
