class RegisteredUser {
    login: string;
    nickname?: string;

    constructor(_login: string) {
        this.login = _login;
    }
}

export default RegisteredUser;