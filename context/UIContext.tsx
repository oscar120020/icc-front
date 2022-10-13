import { createContext } from 'react'

interface ContextProps {
    isMenuOpen: boolean;
    changeMenuState: () => void;
}

export const UIContext = createContext({} as ContextProps)