 export class PasswordReset{ 
    constructor( 
        public resetToken: string, 
        public email: string, 
        public password: string, 
        public password_confirmation: string 
    ){} 
}