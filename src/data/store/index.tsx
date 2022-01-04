import React from "react";

// Vendors
import { ThemeProvider } from "styled-components";

// App context properties
import { Theme } from "src/data/theme";

interface AppContextState {
  theme?: string;
  switchTheme: Function;
  isPhone?: boolean;
}

export const StoreContext = React.createContext<any>({});

// Instruct component Props on what types to use
interface Props {}

// Export
export class Store extends React.Component<Props, AppContextState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      theme: "light",
      switchTheme: this.switchTheme,
    };
  }

  switchTheme = (theme: string) => {
    this.setState({ theme });
  };

  detectWindowResize = () => {
    let isPhone = window.matchMedia("(max-width: 768px)").matches;

    this.setState({
      isPhone,
    });
  };

  componentDidMount() {
    let isPhone = window.matchMedia("(max-width: 768px)").matches;

    this.setState({
      isPhone,
    });

    window.addEventListener("resize", this.detectWindowResize);
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        <ThemeProvider
          theme={this.state.theme === "light" ? Theme.light : Theme.dark}
        >
          {this.props.children}
        </ThemeProvider>
      </StoreContext.Provider>
    );
  }
}
