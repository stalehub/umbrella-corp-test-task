import BOW from '@/components/BOW';
import { SendNotify } from '@/components/NotifyHandler';
import LoadingScreen from '@/components/UmSysCtrl/LoadingScreen';
import NoDataFound from '@/components/UmSysCtrl/NoDataFound';
import ROPLSInfo from '@/components/UmSysCtrl/ROPLSInfo';
import { FragmentType, getFragmentData } from '@/gql';
import { FindProjectQueryDocument } from '@/gql/graphql';
import { ProjectFragment } from '@/graphql/fragments';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const ProjectPage = () => {
  const projectId = useParams().id || '';
  const { data, loading } = useQuery(FindProjectQueryDocument, {
    variables: { projectId },
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  if (!data || !data.findProjectById) {
    return <NoDataFound />;
  }

  const projectProps: FragmentType<typeof ProjectFragment> =
    data.findProjectById;
  const project = getFragmentData(ProjectFragment, projectProps);

  return (
    <div className="w-screen space-y-1.5 bg-slate-400 dark:bg-emerald-900 dark:text-white">
      <div className="w-full p-1 flex justify-center">
        <Link
          className="w-14 text-center border-2 rounded-sm border-black bg-red-800 hover:bg-red-600"
          to="/security"
        >
          Back
        </Link>
      </div>
      <div className="pt-2 text-center">
        <h3 className="italic text-red-600 font-medium">Results list below</h3>
      </div>
      <div className="w-full space-y-1.5 flex flex-col items-center">
        {project?.models?.map(
          (e, i) => e && <BOW key={`bio-weapon-${i}`} model={e} />
        )}
      </div>
      <ROPLSInfo />
    </div>
  );
};

export default ProjectPage;
