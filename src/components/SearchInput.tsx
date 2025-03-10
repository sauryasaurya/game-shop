import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
    >
      <InputGroup width={"100%"} startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="outline"
          width="full"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
