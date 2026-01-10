const LoadingScreen = () => {
  return (
    <div className="bg-black w-screen h-svh">
      <div className="w-full flex justify-center">
        <img
          className="relative pt-10"
          src="/images/d29q4z0-8783f298-185f-4fe8-a283-ebacd1c512ac.gif"
        />
      </div>
      <p className="text-red-600 font-bold text-center">Loading</p>
    </div>
  );
};

export default LoadingScreen;
