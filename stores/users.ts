import type { User } from "~/interfaces/user";

export const useUserStore = defineStore("users", {
    state: () => {
        return {
            users: [] as User[],
            logged: {} as User
        }
    },
    actions: {
        register(user: User): boolean {
            if (this.users.find((u) => u.username === user.username) === undefined) {
                user.id = this.getNewId();
                this.users.unshift(user);
                return true
            }
            return false
        },
        deleteUser(user: User) {
            this.users = this.users.filter((u) => u.id !== user.id);
        },
        getNewId() {
            let id = '1';
            while (this.users.find(u => u.id === id) !== undefined) {
                id = (+id + 1).toString();
            }
            return id;
        },
        login(user: User): boolean {
            const foundUser = this.users.find((u) => u.username === user.username);
            if (foundUser !== undefined) {
                if (user.password === foundUser.password)
                    this.logged = user;
                    return true
            }
            return false 
        },
        logout() {
            this.logged = {id: '', username: '', password: ''}
        },
        isLogged() : boolean {
            return this.logged.username !== '' && this.logged.password !== ''
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
})