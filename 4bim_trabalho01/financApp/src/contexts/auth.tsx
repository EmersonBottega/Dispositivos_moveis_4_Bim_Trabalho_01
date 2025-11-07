import React, {
    createContext,
    useContext,
    useState,
    type ReactNode, 
} from 'react';

type User = {
    nome: string;
}

type AuthContextValue = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextValue | undefined> (
    undefined
)

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User> (
        {nome: "Alunelson"}
    );

    const value: AuthContextValue = { user, setUser };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const ctx = useContext(AuthContext);

    if (!ctx) throw new Error("Usuário não definido");

    return ctx;
}

export default AuthProvider;