import { Character } from "../../interfaces/characters";

interface Props {
  character: Character;
}

const StatusCharacter = ({ character }: Props) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`w-2 h-2 rounded-full ${
          character.status === "Dead" ? "bg-red-500" : "bg-green-600"
        }`}
      ></div>
      <p
        className={`ml-1 capitalize font-bold ${
          character.status === "Dead" ? "text-red-500" : "text-green-600"
        }`}
      >
        {character.status}
      </p>
    </div>
  );
};

export default StatusCharacter;
