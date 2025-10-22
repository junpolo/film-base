import { Heart, Plus } from "@tamagui/lucide-icons";
import { Button } from "tamagui";

import { withOpacity } from "@utils";
import { JSX, useCallback, useEffect, useMemo, useState } from "react";

type ButtonState = "default" | "active";
type size = "lg" | "sm";

interface ButtonProps {
  isActive: boolean;
  size: size;
  onPress: () => void;
}

const buttonStyle: Record<
  ButtonState,
  { color: string; backgroundColor: string; icon: JSX.Element; text: string }
> = {
  default: {
    color: "$color",
    backgroundColor: withOpacity("#ffffff", 0.1),
    icon: <Plus />,
    text: "Add to favorites",
  },
  active: {
    color: "$color",
    backgroundColor: "#dc3545",
    icon: <Heart />,
    text: "Added to favorites",
  },
};

export const FavoriteButton = ({
  isActive,
  size = "lg",
  onPress,
}: Partial<ButtonProps>) => {
  const buttonState = useMemo(
    () => (isActive ? "active" : "default"),
    [isActive]
  );

  const handlePress = () => {
    onPress && onPress();
  };

  const LargeButton = useCallback(
    () => (
      <Button
        {...buttonStyle[buttonState]}
        pressStyle={{
          scale: 0.95,
          backgroundColor: withOpacity(
            buttonStyle[buttonState].backgroundColor,
            0.5
          ),
          borderColor: "none",
        }}
        onPress={handlePress}
      >
        {buttonStyle[buttonState].text}
      </Button>
    ),
    [isActive, buttonState, onPress]
  );

  const SmallButton = useCallback(
    () => (
      <Button
        alignSelf="baseline"
        icon={buttonStyle[buttonState].icon}
        backgroundColor={
          buttonState === "default"
            ? withOpacity("#ffffff", 0.7)
            : buttonStyle[buttonState].backgroundColor
        }
        pressStyle={{
          scale: 0.95,
          backgroundColor: withOpacity(
            buttonStyle[buttonState].backgroundColor,
            1
          ),
          borderColor: "none",
        }}
        color={
          buttonState === "default"
            ? "$accent2"
            : buttonStyle[buttonState].color
        }
        onPress={handlePress}
      />
    ),
    [isActive, buttonState, onPress]
  );

  return (
    <>
      {size === "lg" && <LargeButton />}
      {size === "sm" && <SmallButton />}
    </>
  );
};
