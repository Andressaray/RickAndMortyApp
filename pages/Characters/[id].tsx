import { useRouter } from "next/router";
import Image from "next/image";

import { useCharacter } from "../../src/hooks";
import {
  DescriptionType,
  Navbar,
  StatusCharacter,
  SkeletonCharacter,
} from "../../src/components";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;
  const { character, loading } = useCharacter({ id });

  return (
    <div className="w-full">
      <Navbar />
      {loading ? (
        <SkeletonCharacter />
      ) : (
        <div className="flex flex-col items-center">
          <div className="mx-2 flex flex-col items-center justify-center p-4 rounded-lg mb-5  shadow-md shadow-[#87CD53] bg-[#333] w-full sm:w-1/2  sm:flex-row">
            <Image
              src={character[0].image}
              height={120}
              width={200}
              className="rounded-full border-2"
              alt={character[0].name}
            />
            <div className="mt-5 sm:ml-20">
              <DescriptionType title="Name" text={character[0].name} />
              <div className="flex items-center mt-4">
                <p className="text-white font-bold underline mr-2">Status:</p>
                <StatusCharacter character={character[0]} />
              </div>
              <DescriptionType title="Specie" text={character[0].species} />
              <DescriptionType title="Gender" text={character[0].gender} />
              <DescriptionType
                title="Location"
                text={character[0].location.name}
              />
              <DescriptionType title="Origin" text={character[0].origin.name} />
            </div>
          </div>
          <div className="shadow-md bg-[#333] rounded-lg w-full sm:w-1/2 p-4 shadow-[#87CD53]">
            <p className="text-white underline text-xl my-4">Episodes</p>
            <div className="flex flex-col gap-4">
              {character[0].episode.slice(0, 8).map((episode) => (
                <div
                  className="bg-[#444] p-2 w-full rounded-lg sm:1/2"
                  key={episode}
                >
                  <p className="text-white italic">{episode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
