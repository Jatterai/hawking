import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const toggleIsAuth = () => setIsAuth(p => !p);

	return (
		<AuthContext.Provider value={{ isAuth, toggleIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}