import { createContext, ReactNode, useState } from "react"

interface TableContextData {
    displayInfs: string;
    displayTableNutri: string;
    openTabelaNutricional: () => void;
    closeTabelaNutricional: () => void;
}

interface TableProviderProps {
    children: ReactNode;
}

export const NutriTableContext = createContext({} as TableContextData)

export function NutriTableProvider({ children }: TableProviderProps) {
    const [displayInfs, setDisplayInfs] = useState("flex")
    const [displayTableNutri, setDisplayTableNutri] = useState("none")

    function openTabelaNutricional() {
        setDisplayInfs("none")

        setDisplayTableNutri("flex")
    }

    function closeTabelaNutricional() {
        setDisplayInfs("flex")

        setDisplayTableNutri("none")
    }

    return (
        <NutriTableContext.Provider value={{
            displayInfs,
            displayTableNutri,
            openTabelaNutricional,
            closeTabelaNutricional
        }}>
            { children }
        </NutriTableContext.Provider>
    )
}
