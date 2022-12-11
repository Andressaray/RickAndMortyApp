import { useState } from "react";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { Character, ResponseCharacters } from "../interfaces/characters";
import { getCharacters } from "../services/characters";

interface Props {
  page: number;
  name: string;
}

const useCharacters = ({ page = 1, name = ""}: Props) => {
  const [characters, setCharacters] = useState<Character[]>();
  const [pages, setPages] = useState<number>(2)

  const {isLoading} = useQuery(
    ["characters", page, name],
    () =>
      getCharacters({
        page,
        name
      }),
    {
      onSuccess: (data: ResponseCharacters) => {
        setCharacters(data.results || [])
        setPages(data.info.pages)
      },
      onError: (error: AxiosError) => {
        toast.error(error.message)
      },
    }
  );

  return {
    loading: isLoading,
    characters: characters || [],
    pages
  };
};

export default useCharacters;
