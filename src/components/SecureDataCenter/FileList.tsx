import { IProjectQueryVars } from '@/@types/types';
import { SendNotify } from '@/components/NotifyHandler';
import ProjectCard from '@/components/ProjectCard';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import { FragmentType, getFragmentData } from '@/gql';
import { AllProjectsQueryDocument } from '@/gql/graphql';
import { PageInfoFragment } from '@/graphql/fragments';
import { useQuery } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';

const FileList = ({
  variables,
  setVariables,
}: {
  variables: IProjectQueryVars;
  setVariables: Dispatch<SetStateAction<IProjectQueryVars>>;
}) => {
  const { data, loading, fetchMore } = useQuery(AllProjectsQueryDocument, {
    variables,
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return (
      <div className="w-full h-86">
        <div className="w-full mt-4 m-auto border-2 rounded-sm border-transparent dark:bg-black">
          <UmbrellaLabel title="File List" />
        </div>
        <div className="animate-pulse flex flex-col">
          <div className="p-1 pt-6">
            <div className="h-6 bg-gray-300"></div>
            <div className="h-6">.........</div>
            <div className="h-6">request accepted...</div>
            <div className="h-6">processing...</div>
            <div className="h-6">It may take some time...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.allProjects) {
    return (
      <div className="w-full h-86 space-y-6">
        <p className="text-black text-center">No data found</p>
      </div>
    );
  }

  // Refers https://github.com/apollographql/apollo-client/issues/5903
  // Note that you cannot directly change read-only cache.

  const projectNodes = data?.allProjects
    ? data?.allProjects?.edges.map((e) => e?.node)
    : [];
  const pageInfoField: FragmentType<typeof PageInfoFragment> =
    data?.allProjects?.pageInfo;
  const pageInfo = getFragmentData(PageInfoFragment, pageInfoField);

  const PaginatedContent = () => {
    const onLoadMore: React.UIEventHandler<HTMLDivElement> = (e) => {
      const allowFetchMore: boolean = !loading && pageInfo.hasNextPage;

      if (!allowFetchMore) {
        return;
      }

      const endReached: boolean =
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        e.currentTarget.clientHeight;

      if (endReached) {
        const currentLength = projectNodes.length;
        setVariables({
          ...variables,
          first: 5 + currentLength,
        });

        fetchMore({
          variables: {
            after: pageInfo.endCursor,
          },
        });
      }
    };

    return (
      <div onScroll={onLoadMore} className="h-72 overflow-y-scroll">
        <ul className="pl-2 pr-2 style-inside italic text-base sm:text-lg text-red-800">
          {projectNodes.length > 0 ? (
            projectNodes.map(
              (node, i) =>
                node && <ProjectCard key={`project-${i}`} project={node} />
            )
          ) : (
            <p className="font-medium">No data found</p>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full h-80">
      <div className="w-full mt-4 m-auto border-2 rounded-sm border-transparent dark:bg-black">
        <UmbrellaLabel title="File List" />
      </div>
      <PaginatedContent />
    </div>
  );
};

export default FileList;
