import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading] = useState(false);

  const login = async (email: string, password: string) => {
  const response = await fetch('http://localhost:1337/auth/local', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });

  // Leia o corpo da resposta apenas uma vez
  const responseData = await response.json();

  if (!response.ok) {
    // Estrutura do erro do Strapi v3
    const message =
      responseData?.message?.[0]?.messages?.[0]?.message ||
      'Erro ao fazer login';

    throw new Error(message);
  }

  return responseData;
};


  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de AuthProvider');
  }
  return context;
}
