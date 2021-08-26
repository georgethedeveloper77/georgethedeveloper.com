import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
          <MessengerCustomerChat
            pageId="102360768552591"
            appId="891567418072170"
            htmlRef="https://kcdia.netlify.app/"
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
