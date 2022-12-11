import { useState } from "react";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { Character } from "../interfaces/characters";
import { getCharacter } from "../services/characters";

interface Props {
  id: number;
}

const useCharacter = ({ id }: Props) => {
  const [character, setCharacter] = useState<Character[]>();

  const {status} = useQuery(
    ["character", id],
    () =>
    getCharacter(id),
    {
      onSuccess: (data: Character) => {
        setCharacter([
          data
        ])
      },
      onError: (error: AxiosError) => {
        toast.error(error.message)
      },
    }
  );

  return {
    loading: status === 'loading' ? true : false,
    character: character || []
  };
};

export default useCharacter;
