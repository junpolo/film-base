import { MessageSquareWarning } from "@tamagui/lucide-icons";
import { H6, Text, View } from "tamagui";

export const EmptySearch = ({ value }: { value: string }) => {
  return (
    <View
      flex={1}
      paddingInline={18}
      justifyContent="center"
      alignItems="center"
      marginBottom={70}
      gap={14}
    >
      <MessageSquareWarning size={120} />
      <View alignItems="center" gap={7}>
        <H6>Oops!</H6>
        <Text fontSize="$2" textAlign="center" color="gray" lineHeight="$2">
          We couldn't find any movies matching '
          <Text fontWeight={700}>{value}</Text>'. Try searching with a different
          title or keyword.
        </Text>
      </View>
    </View>
  );
};
