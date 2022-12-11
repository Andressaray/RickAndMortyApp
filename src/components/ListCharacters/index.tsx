import Image from "next/image";
import { useRouter } from "next/router";

import { Character } from "../../interfaces/characters";
import SkeletonCharacters from "../SkeletonCharacters";
import StatusCharacter from "../StatusCharacter";

interface Props {
  loading: boolean;
  characters: Character[];
}

const ListCharacters = ({ characters, loading }: Props) => {
  const router = useRouter();

  const handleCharacter = (id: number) => {
    router.push(`/Characters/${id}`);
  };

  return loading ? (
    <SkeletonCharacters />
  ) : (
    <div className="flex flex-row flex-wrap gap-4 justify-center">
      {characters.map((character) => (
        <button
          key={character.id}
          onClick={() => handleCharacter(character.id)}
          className="bg-[#444] shadow-md rounded-md p-5 transform transition duration-500 hover:scale-110 hover:z-10 hover:shadow-[#87CD53]"
        >
          <div className="flex w-80">
            <Image
              src={character.image}
              height={80}
              width={140}
              alt={character.name}
              className="rounded-md border-2"
            />
            <div className="flex flex-col justify-center text-left ml-4">
              <p className="text-white font-bold text-xl">{character.name}</p>
              <StatusCharacter character={character} />
              <p className="text-white">{character.species}</p>
              <p className="text-ellipsis text-white">
                {character.location.name}
              </p>
              <p className="text-white">{character.type}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ListCharacters;
