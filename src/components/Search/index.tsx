interface Props {
  text: string;
  setText: (v: string) => void;
}

const Search = ({ text, setText }: Props) => {
  return (
    <div className="my-4 w-96">
      <input
        className="p-2 w-full rounded-md outline-[#87CD53]"
        value={text}
        placeholder={"Search Character"}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
