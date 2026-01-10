import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-screen bg-black items-center">
      <img
        className="md:object-cover cursor-none"
        src="/images/steamuserimages-a.akamaihd.jpg"
      />
      <div className="w-11/12 m-auto p-1">
        <p className="text-white">
          We're sorry, but the page that you requested not exist.
        </p>
        <Link
          className="w-fit border-2 rounded-sm border-black bg-red-800 hover:bg-red-600 hover:text-white"
          to="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
