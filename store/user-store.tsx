import React from "react";
import RegisteredUser from "../models/RegisteredUser";

type UserContextObj = {
    user?: RegisteredUser,
    login: (username: string) => void,
    setNickname: (nickname: string) => void,
    isLoggedIn: () => boolean,
    logout: () => void,
}

export const UserContext = React.createContext<UserContextObj>({
    user: undefined,
    login: () => {},
    setNickname: () => {},
    isLoggedIn: () => false,
    logout: () => {}
});

const UserContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    let user: RegisteredUser | undefined;

    const login = (username: string) => {
        user = new RegisteredUser(username);
    }

    const setNickname = (nickname: string) => {
        if (user != null) {
            user.nickname = nickname;
        }
    }

    const isLoggedIn = () => {
        return user != null;
    }

    const logout = () => {
        user = undefined;
    }

    const contextValue: UserContextObj = {
        user,
        login,
        setNickname,
        isLoggedIn,
        logout,
    }

    return <UserContext.Provider value={contextValue}>
        {props.children}
    </UserContext.Provider>
}

export default UserContextProvider;