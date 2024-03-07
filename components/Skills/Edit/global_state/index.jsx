import { useState, createContext } from "react";

export const FrontendContext = createContext();
export const FrontendProvider = (props) => {
    const [frontend, setFrontend] = useState(props.firstValue);

    return (
        <FrontendContext.Provider value={{frontend, setFrontend}}>
            {props.children}
        </FrontendContext.Provider>
    );
}

export const BackendContext = createContext();
export const BackendProvider = (props) => {
    const [backend, setBackend] = useState(props.firstValue);

    return (
        <BackendContext.Provider value={{backend, setBackend}}>
            {props.children}
        </BackendContext.Provider>
    );
}

export const DatabaseContext = createContext();
export const DatabaseProvider = (props) => {
    const [database, setDatabase] = useState(props.firstValue);

    return (
        <DatabaseContext.Provider value={{database, setDatabase}}>
            {props.children}
        </DatabaseContext.Provider>
    );
}

export const DevOpsContext = createContext();
export const DevOpsProvider = (props) => {
    const [devops, setDevops] = useState(props.firstValue);

    return (
        <DevOpsContext.Provider value={{devops, setDevops}}>
            {props.children}
        </DevOpsContext.Provider>
    );
}
