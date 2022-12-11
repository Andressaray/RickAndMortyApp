const SkeletonEpisodes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 animate-pulse">
      {new Array(20).fill(1, 1, 18).map((item) => (
        <div
          className="w-full h-10 bg-[#444] rounded-md"
          key={item}
        ></div>
      ))}
    </div>
  );
};

export default SkeletonEpisodes;
