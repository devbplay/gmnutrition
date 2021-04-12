import { createContext, ReactNode, useState } from "react";

interface MenuContextData {
    rightMenu: string;
    displayMenu: string;
    handleMenu: () => void;
}

interface MenuProviderProps {
    children: ReactNode;
}

export const MenuContext = createContext({} as MenuContextData)

export function MenuProvider({ children }: MenuProviderProps) {
    const [rightMenu, setRightMenu] = useState("-700px")
    const [displayMenu, setDisplayMenu] = useState("none")

    function handleMenu() {
        if (rightMenu === "0px") {
            setRightMenu("-700px")

            setTimeout(() => {
                setDisplayMenu("none")
            }, 500)
        } else {
            setDisplayMenu("flex")

            setTimeout(() => {
                setRightMenu("0px")
            }, 500)
        }
    }

    return (
        <MenuContext.Provider value={{
            rightMenu,
            displayMenu,
            handleMenu
        }}>
            { children }
        </MenuContext.Provider>
    )
}
