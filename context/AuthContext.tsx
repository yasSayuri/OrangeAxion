// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router'; // Para redirecionar, se necessário

interface AuthContextType {
  user: { email: string; token: string } | null;
  login: (email: string, token: string) => void;
  logout: () => void;
  isLoading: boolean; // Para saber se o token do localStorage já foi verificado
}

// Cria o contexto com um valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor de autenticação para envolver a aplicação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string; token: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Começa como true, pois estamos verificando o localStorage

  const router = useRouter(); // Inicializa o useRouter

  useEffect(() => {
    // Ao carregar a aplicação, tenta recuperar o usuário do localStorage
    const storedUser = localStorage.getItem('orangeAxionUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // Validação básica do token (pode ser expandida para verificar expiração)
        if (parsedUser && parsedUser.email && parsedUser.token) {
          setUser(parsedUser);
        } else {
          // Dados inválidos, limpa o localStorage
          localStorage.removeItem('orangeAxionUser');
        }
      } catch (error) {
        console.error('Falha ao analisar usuário do localStorage:', error);
        localStorage.removeItem('orangeAxionUser'); // Limpa se estiver corrompido
      }
    }
    setIsLoading(false); // Marca o carregamento inicial como concluído
  }, []); // O array vazio garante que este efeito roda apenas uma vez ao montar o componente

  const login = (email: string, token: string) => {
    const userData = { email, token };
    setUser(userData);
    localStorage.setItem('orangeAxionUser', JSON.stringify(userData)); // Salva no localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('orangeAxionUser'); // Remove do localStorage
    router.push('/'); // Redireciona para a página de login após o logout
  };

  // O valor que será disponibilizado para os componentes que usarem `useAuth`
  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};