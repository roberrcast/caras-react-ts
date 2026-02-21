import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import logo from "./assets/Logo-1.png";
import SubscriptionForm from "./components/SubscriptionForm";
import FeaturedSection from "./components/FeaturedSection";
import CommentSection from "./components/CommentSection";
import Headlines from "./components/Headlines";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                <Header logoSrc={logo} />
                <SubscriptionForm />
                <FeaturedSection />
                <CommentSection />
                <Headlines />
            </div>
        </ThemeProvider>
    );
}

export default App;
