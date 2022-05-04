import { Tuple } from "@mantine/core";

type CustomColors = "brandMain" | "brandAccent";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}

// or if you want to "extend" standard colors
import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "brandMain" | "brandAccent" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
