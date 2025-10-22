import { Dot } from "@tamagui/lucide-icons";
import { View, Text } from "tamagui";

type RuntimeProps = {
  data: string[];
};

export const Runtime = ({ data }: RuntimeProps) => {
  if (!data) return null;

  return (
    <View flexDirection="row" gap={5}>
      {data.map((item, idx) => (
        <View
          key={`runtime-${item}-${idx}`}
          flexDirection="row"
          alignItems="center"
          gap={5}
        >
          {idx > 0 && <Dot />}
          <Text key={`${item}-${idx}`}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
