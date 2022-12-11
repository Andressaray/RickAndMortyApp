import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import { getEpisodes } from "../services/episodes";
import { Episodes, ResponseEpisodes } from "../interfaces/episodes";

interface Props {
  page: number;
}

const useEpisodes = ({ page }: Props) => {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [pages, setPages] = useState<number>(2);

  const { isLoading } = useQuery(
    ["episodes", page],
    () =>
      getEpisodes({
        page,
      }),
    {
      onSuccess: (data: ResponseEpisodes) => {
        setEpisodes(data.results);
        setPages(data.info.pages);
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );

  return {
    episodes,
    loading: isLoading,
    pages,
  };
};

export default useEpisodes;
