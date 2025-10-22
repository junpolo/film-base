import { useState } from "react";
import {
  Button,
  H4,
  H6,
  Input,
  Sheet,
  Text,
  View,
  XStack,
  YStack,
  useTheme,
} from "tamagui";
import { MovieFilters, MovieTypes } from "../types";

type FilterProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedType?: MovieTypes | undefined;
  yearReleased?: string;
  onApplyFilter?: (filters: MovieFilters) => void;
};

type ValidMovieTypes = Exclude<MovieTypes, undefined>;

const movieTypes: Record<ValidMovieTypes, string> = {
  movie: "Movie",
  series: "Series",
  episode: "Episode",
};

export const FilterBottomSheet = ({
  open,
  setOpen,
  selectedType,
  yearReleased = "",
  onApplyFilter,
}: FilterProps) => {
  const theme = useTheme();

  const [type, setType] = useState<MovieTypes>(selectedType);
  const [year, setYear] = useState(yearReleased);

  const handleTypeSelect = (type: MovieTypes) => {
    setType(type);
  };

  const handleTextChange = (value: string) => setYear(value);

  const handleApplyFilter = () => {
    onApplyFilter && onApplyFilter({ movieType: type, year });
  };

  const showResetButton = yearReleased !== "" || selectedType !== undefined;

  const handleResetFilters = () => {
    setYear("");
    setType(undefined);
    onApplyFilter && onApplyFilter({ movieType: undefined, year: "" });
  };

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      open={open}
      onOpenChange={setOpen}
      modal
      animation="medium"
      zIndex={100_000}
    >
      <Sheet.Overlay
        animation="lazy"
        backgroundColor="$shadow6"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle
        style={{
          backgroundColor: theme.borderColor?.val,
        }}
      />
      <Sheet.Frame
        paddingInline={24}
        paddingBlock={32}
        borderTopWidth={1}
        borderColor="$borderColor"
      >
        <H4>Filter</H4>
        <Text color="gray">Personalize how movies appear to you.</Text>

        <YStack gap={24} marginTop={48}>
          <View gap={8}>
            <H6>Type</H6>
            <XStack gap={10}>
              {Object.keys(movieTypes).map((movieType, idx) => (
                <Button
                  key={`movietype-${movieType}-${idx}`}
                  variant="outlined"
                  borderWidth={type === movieType ? 0 : 1}
                  onPress={() => handleTypeSelect(movieType as MovieTypes)}
                  backgroundColor={
                    type === movieType ? "$accent2" : "transparent"
                  }
                >
                  {movieTypes[movieType as ValidMovieTypes]}
                </Button>
              ))}
            </XStack>
          </View>

          <View gap={8}>
            <H6>Year</H6>
            <XStack>
              <Input
                placeholder="Enter the year of release"
                keyboardType="numeric"
                flex={1}
                backgroundColor="#ffffff"
                placeholderTextColor="$color1"
                color="$color1"
                value={year}
                onChangeText={handleTextChange}
              />
            </XStack>
          </View>
        </YStack>

        <XStack marginTop="auto" gap={8}>
          <Button
            flex={1}
            size="$5"
            backgroundColor="$accent2"
            onPress={handleApplyFilter}
          >
            Apply
          </Button>

          {showResetButton && (
            <Button
              flex={1}
              size="$5"
              variant="outlined"
              onPress={handleResetFilters}
            >
              Reset
            </Button>
          )}
        </XStack>
      </Sheet.Frame>
    </Sheet>
  );
};
