const defaultTheme = {
  defaultTransition: "all 150ms ease-in-out",
  defaultGutter: 1,
  defaultRadius: 6,
  colors: {
    primary: "#374151",
    secondary: "#60a5fa",
    green: "#C7E8E6",
    red: "#DB3D23",
    white: "#ffffff",
    black: "#000000",
    dark: "#060A1C",
  },
  spaces: {
    1: 10,
    2: 15,
    3: 20,
    4: 50,
    5: 100,
  },
  font: {
    size: 14,
    family: "system-ui, sans-serif",
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  breakpoints: {
    sm: 768,
    md: 769,
    lg: 1024,
    xl: 1200,
  },
};

// Export default Light and Dark themes
export const Theme: any = {
  light: {
    defaultShadow: "0 1px 2px 0 rgba(0,0,0,.06)",
    ...defaultTheme,
    colors: {
      body: "#ffffff",
      text: "#060A1C",
      ...defaultTheme.colors,
    },
  },
  dark: {
    colorBody: "#202124",
    colorText: "#999999",
    colors: {
      body: "#060A1C",
      text: "#ffffff",
      ...defaultTheme.colors,
    },
  },
};
