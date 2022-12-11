import { useState } from "react";
import Image from "next/image";
import {
  ListCharacters,
  Navbar,
  Pagination,
  Search,
} from "../../src/components";
import { useCharacters } from "../../src/hooks";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const { loading, characters, pages } = useCharacters({
    page,
    name: name.length > 2 ? name : "",
  });

  const handleChangeName = (v: string) => {
    setPage(1);
    setName(v);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/rickAndMorty.png"}
          height={400}
          width={400}
          alt="Rick and Morty"
        />
        <Search text={name} setText={handleChangeName} />
        <ListCharacters characters={characters} loading={loading} />
        <Pagination page={page} setPage={setPage} totalPages={pages} />
      </div>
    </div>
  );
};
export default Home;
