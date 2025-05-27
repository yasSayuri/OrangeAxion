// src/providers/User/UserProvider.ts
import Parse from 'parse';
import { parseAppId, parseUrlServer, parseJavaScriptKey } from '../../apiURL';
import { EventEmitter } from 'events'; // Importe EventEmitter

export default class UserProvider extends EventEmitter { // <--- ADICIONE extends EventEmitter AQUI
    private _currentUser: Parse.User | null;
    private _isAuthenticated: boolean;

    constructor() {
        super(); // Chame o construtor da classe pai (EventEmitter)
        this.parseInitialize();
        this._currentUser = Parse.User.current();
        this._isAuthenticated = !!this._currentUser;
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    get user(): Parse.User | null {
        return this._currentUser;
    }

    parseInitialize() {
        if (!Parse.applicationId) {
            Parse.initialize(parseAppId, parseJavaScriptKey);
            Parse.serverURL = parseUrlServer;
            console.log('Parse SDK inicializado por UserProvider.');
        }
    }

    async login(username: string, password: string): Promise<Parse.User> {
        try {
            const loggedInUser = await Parse.User.logIn(username, password);
            console.log('Login bem-sucedido:', loggedInUser);
            this._currentUser = loggedInUser;
            this._isAuthenticated = true;
            this.emit('loggedIn', loggedInUser); // Evento 'loggedIn'
            return loggedInUser;
        } catch(error: unknown) {
            console.error('Erro no login:', error);
            if (error instanceof Error) {
                throw error;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                throw new Error((error as {message: string}).message);
            }
            throw new Error('Ocorreu um erro desconhecido durante o login.');
        }
    }

    currentUser(): Parse.User | null {
        // Atualiza o estado interno e retorna o usuário atual
        this._currentUser = Parse.User.current();
        this._isAuthenticated = !!this._currentUser;
        return this._currentUser;
    }

    async logout(): Promise<void> {
        try {
            await Parse.User.logOut();
            console.log('Logout bem-sucedido.');
            this._currentUser = null;
            this._isAuthenticated = false;
            this.emit('loggedOut'); // Evento 'loggedOut'
        } catch (error: unknown) {
            console.error('Erro no logout:', error);
            if (error instanceof Error) {
                throw error;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                throw new Error((error as {message: string}).message);
            }
            throw new Error('Ocorreu um erro desconhecido durante o logout.');
        }
    }

    // --- NOVO MÉTODO: fetchList para buscar dados das classes do Parse ---
    async fetchList(className: string): Promise<unknown[]> { // <--- ADICIONE ESTE MÉTODO
        const query = new Parse.Query(className);
        try {
            const results = await query.find();
            // O Parse SDK retorna objetos Parse.Object, mapeie para JSON simples
            return results.map(item => ({
                id: item.id,
                ...item.toJSON() // Retorna todos os atributos do objeto como JSON simples
            }));
        } catch (error: unknown) {
            console.error(`Erro ao buscar dados da classe ${className}:`, error);
            if (error instanceof Error) {
                throw error;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                throw new Error((error as {message: string}).message);
            }
            throw new Error(`Falha ao carregar lista de ${className}.`);
        }
    }
}