import { FormEvent, useState } from "react";

type Props = {
  handleSearch: (val: string) => void;
};

const Search = ({ handleSearch }: Props) => {
  const [val, setValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(val);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={val}
      />
      <button type="submit"> Search </button>
    </form>
  );
};

export default Search;
