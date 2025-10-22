import { Spinner, View, Text } from "tamagui";

export const Loader = () => {
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      backgroundColor="$background"
      flexWrap="wrap"
    >
      <Spinner size="large" color="$accent2" marginBottom={24} />
      <Text fontSize="$5">Searching the archives</Text>
      <Text color="gray" lineHeight="$2">
        Looking up your movie — this won’t take long!
      </Text>
    </View>
  );
};
