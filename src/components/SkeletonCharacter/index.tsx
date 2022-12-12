const SkeletonCharacter = () => {
  return (
    <div>
      <div
        role="status"
        className="sm:w-1/2 mx-auto animate-pulse dark:border-gray-700"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center shadow-lg rounded-lg w-full p-4 bg-gray-500">
          <div>
            <div className="h-60 w-60 bg-gray-600 rounded-full"></div>
          </div>
          <div className="ml-4 sm:w-1/2 mt-4">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
          </div>
        </div>
      </div>
      <div
        role="status"
        className="w-full sm:w-1/2 h-60 mx-auto p-8 mt-5 rounded-lg animate-pulse dark:border-gray-700 bg-gray-500"
      >
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
      </div>
    </div>
  );
};

export default SkeletonCharacter;
