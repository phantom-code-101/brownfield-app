import Brownfield from "@/brownfield/index";
import Greenfield from "@/app/index";
import React from "react";

const isBrownfield = process.env.EXPO_PUBLIC_IS_BROWNFIELD === "true";

const App = () => {
    if (isBrownfield) {
        return <Brownfield />;
    } else {
        return <Greenfield />;
    }
}

export default App;