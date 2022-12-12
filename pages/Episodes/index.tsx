import { useState } from "react";
import { Navbar, Pagination, SkeletonEpisodes } from "../../src/components";
import { useEpisodes } from "../../src/hooks";

const Episodes = () => {
  const [page, setPage] = useState<number>(1);
  const { episodes, pages, loading } = useEpisodes({ page });
  return (
    <div>
      <title>Episodes</title>
      <Navbar />
      {loading ? (
        <SkeletonEpisodes />
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
          {episodes.map((episode) => (
            <div
              className="flex justify-between p-3 bg-[#444] rounded-md"
              key={episode.id}
            >
              <p className="text-white italic">{episode.name}</p>
              <p className="text-white">{episode.air_date}</p>
            </div>
          ))}
        </section>
      )}
      <Pagination totalPages={pages} page={page} setPage={setPage} />
    </div>
  );
};
export default Episodes;
