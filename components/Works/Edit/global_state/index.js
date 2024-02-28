import { useState, createContext } from 'react';


export const DevelopContext = createContext();
export const DevelopProvider = (props) => {
    const [develop, setDevelop] = useState(props.firstValue);

    return (
        <DevelopContext.Provider value={{develop, setDevelop}}>
            {props.children}
        </DevelopContext.Provider>
    );
};

export const AwardContext = createContext();
export const AwardProvider = (props) => {
    const [award, setAward] = useState(props.firstValue);

    return (
        <AwardContext.Provider value={{award, setAward}}>
            {props.children}
        </AwardContext.Provider>
    );
};