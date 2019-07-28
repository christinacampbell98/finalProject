export class Users {
    name: string;
    email: string;
    password: string;
    phone: number;
    status: boolean;
    
    constructor(nameInput,emailInput, passwordInput, phoneInput,statusInput) {
        this.name = nameInput;
        this.email= emailInput;
        this.password = passwordInput;
        this.phone = phoneInput;
        this.status = statusInput;
    }

}
