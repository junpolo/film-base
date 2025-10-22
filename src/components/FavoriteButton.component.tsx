import { Plus } from "@tamagui/lucide-icons";
import { Button } from "tamagui";

import { withOpacity } from "@utils";

export const FavoriteButton = () => {
  return (
    <Button
      icon={Plus}
      color="$color"
      backgroundColor={withOpacity("#ffffff", 0.1)}
      pressStyle={{
        scale: 0.95,
        backgroundColor: withOpacity("#ffffff", 0.5),
        borderColor: "none",
      }}
    >
      Add to favorites
    </Button>
  );
};
