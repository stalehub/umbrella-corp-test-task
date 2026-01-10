import { FragmentType, getFragmentData } from '@/gql';
import { ProjectFragment } from '@/graphql/fragments';
import { Link } from 'react-router-dom';

const ProjectCard = ({
  project,
}: {
  project: FragmentType<typeof ProjectFragment>;
}) => {
  const item = getFragmentData(ProjectFragment, project);

  return (
    <li>
      <h3 className="bg-gray-300 text-black">Project: {item.projectName}</h3>
      <p className="hidden md:inline-block text-stone-700">
        {item.description}
      </p>
      <Link className="hover:text-red-400" to={`/security/projects/${item.id}`}>
        File Content
      </Link>
    </li>
  );
};

export default ProjectCard;
