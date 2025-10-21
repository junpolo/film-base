import { Text, View } from "tamagui";

export const SearchResultText = ({ value }: { value: string }) => {
  return (
    <View paddingInline={18} marginBottom={24}>
      <Text fontSize="$2">
        Search results for{" "}
        <Text color="$accent8" fontWeight={700}>
          {value}
        </Text>
      </Text>
    </View>
  );
};
