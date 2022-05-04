import { MantineThemeOverride } from "@mantine/core";

export const mantineTheme: MantineThemeOverride = {
  fontFamily: "Montserrat, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Josefin Sans, sans-serif" },
  colors: {
    brandMain: [
      "#F6E7E7",
      "#EAC8C8",
      "#DFABAB",
      "#D59191",
      "#CC7A7A",
      "#C36464",
      "#BC5151",
      "#AF4343",
      "#9D3D3D",
      "#8E3737",
    ],
    brandAccent: [
      "#F9F7F8",
      "#E4DFE2",
      "#D1C9CF",
      "#C0B5BD",
      "#B0A3AC",
      "#A2929E",
      "#958390",
      "#887482",
      "#7A6975",
      "#6E5E6A",
    ],
  },
  primaryColor: "brandMain",
};
