import React, { useState } from "react";

export const WaterContext = React.createContext({});

const WaterProvider = props => {

    return (
        <WaterContext.Provider
            value={{
                
            }}
        >
            {props.children}
        </WaterContext.Provider>
    );
};

export default WaterProvider