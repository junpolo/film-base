import { View, Text } from "tamagui";

type GenreProps = {
  genre: string;
};

export const Genre = ({ genre }: GenreProps) => {
  if (!genre || genre === "N/A") return null;

  const items = genre.split(",").map((item) => item.trim());

  return (
    <View flexDirection="row" flexWrap="wrap" gap={10}>
      {items.map((item, idx) => (
        <Text
          key={`${item}-${idx}`}
          backgroundColor="$accent2"
          borderRadius="$2"
          paddingBlock={4}
          paddingInline={8}
          fontSize="$1"
          alignSelf="baseline"
        >
          {item}
        </Text>
      ))}
    </View>
  );
};
