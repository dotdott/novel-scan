import React, { createContext, ReactNode, SetStateAction, useState } from "react"

interface ChapterContextData {
    chapter: (route: string, chap: string | string[]) => void;
    chapterContent: string;
    chapterRoute: string;
    setChapterRoute: React.Dispatch<React.SetStateAction<string>>;
    setChapterContent: React.Dispatch<React.SetStateAction<string>>;
}


interface ChapterProviderProps {
    children: ReactNode;
}

export const ChapterContext = createContext({} as ChapterContextData )

export function ChapterProvider({children}: ChapterProviderProps) {     
    const [chapterContent, setChapterContent] = useState('');

    const [chapterRoute, setChapterRoute] = useState('C0');
    
    const chapter = (route: string ,chap: string) => {
        fetch(route + chap + '.txt', {
            headers: {
                'Content-type': 'application/text',
                'Accept': 'application/text'
            }
        })
        .then(response => {    
            if(!response.ok){
                throw new Error('Capítulo indisponível ou ATUALIZE A PÁGINA.')
            } else {
                return response.text();             
            }
        })
        .then(text => {
            setChapterContent(text);
        })
        .catch(error => {
            setChapterContent(error.message);
        })
    }

    return(
       <ChapterContext.Provider value={{
            chapter,
            chapterContent,
            chapterRoute,
            setChapterRoute,
            setChapterContent
       }}>
           {children}
       </ChapterContext.Provider>
    )
}