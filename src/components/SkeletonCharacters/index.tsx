const SkeletonCharacters = () => {
  return (
    <div
      role="status"
      className="flex flex-row flex-wrap gap-4 justify-center animate-pulse dark:border-gray-700"
    >
      {new Array(20).fill(1, 1, 18).map((item) => (
        <div className="shadow-lg rounded-md w-96 h-40 p-4 bg-gray-500" key={item}>
          <div className="flex items-center">
            <div className="h-32 w-32 animate-pulse bg-gray-600 rounded-md"></div>
            <div className="ml-4">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCharacters;
