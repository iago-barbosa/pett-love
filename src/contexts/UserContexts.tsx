import React, { ReactNode } from 'react';


type UserContextProps = {
    children: ReactNode;
}


const initialValue = {
    isMobile: false,
    isOpenMenu: false,
    setIsOpenMenu: (newState: boolean) => {},
    loading: true,
    setLoading: (newState: boolean) => {},
}

export const UserContexts = React.createContext(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
    const md = 768;
    const [isMobile, setIsMobile] = React.useState(initialValue.isMobile);
    const [isOpenMenu, setIsOpenMenu] = React.useState(initialValue.isOpenMenu);
    const [loading, setLoading] = React.useState(initialValue.loading);

    const componentDidMount = () => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
    }
    
    const updateIsMobile = () => {
        const mobile = window.innerWidth >= md;
        setIsMobile(!mobile);
    }
    
    React.useEffect(() => {
        componentDidMount();
    },[]);

    return (
        <UserContexts.Provider value={{isMobile, isOpenMenu, setIsOpenMenu, loading, setLoading}}>{children}</UserContexts.Provider>
    );
};