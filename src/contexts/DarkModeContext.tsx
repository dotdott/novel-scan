import { createContext, ReactNode, useEffect, useState } from "react";

interface DarkModeContextData { 
    readMode: string;
    darkMode: () => void;
    theme: any;
}

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData)

export function DarkModeProvider({children}: DarkModeProviderProps){    
    const [readMode, setReadMode] = useState('light');
    
    let theme = typeof window !== 'undefined' && localStorage.getItem('theme');

    const darkMode = () => {
        if (theme === 'dark'){
            setReadMode('light');
            localStorage.setItem('theme', 'light')
            theme = 'light';
        } else {
            setReadMode('dark');
            localStorage.setItem('theme', 'dark');
            theme = 'dark';
        }
    }

    useEffect(()=> {
        if(theme === 'dark' || theme === 'light'){
            setReadMode(theme);
        } else {
            setReadMode('light');
        }
    },[readMode, darkMode])



    return(
        <DarkModeContext.Provider value={{
            darkMode,
            readMode,
            theme
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}