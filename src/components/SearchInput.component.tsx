import { useEffect, useMemo, useState } from "react";
import { Button, Input, View, XStack } from "tamagui";

import { useDebounce } from "@hooks";
import { Search, X } from "@tamagui/lucide-icons";

type SearchProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

export const SearchInput = ({
  onSearch,
  placeholder = "What's on your mind?",
}: SearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 700);

  const isSearching = useMemo(() => searchInput !== "", [searchInput]);

  const resetSearchInput = () => setSearchInput("");

  useEffect(() => {
    onSearch && onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <XStack flex={1} alignItems="center" justifyContent="flex-start">
      <Input
        flex={1}
        backgroundColor="$color1"
        paddingLeft={50}
        placeholder={placeholder}
        value={searchInput}
        onChangeText={setSearchInput}
      />
      {isSearching ? (
        <Button
          position="absolute"
          size="$4"
          icon={X}
          padding="$3"
          backgroundColor="transparent"
          onPress={resetSearchInput}
        />
      ) : (
        <Search position="absolute" marginLeft={15} color="$borderColor" />
      )}
    </XStack>
  );
};
