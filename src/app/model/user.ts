import { DecimalPipe } from '@angular/common';

export class User {

    /**
     * Define los datos del usuario de la aplicación
     * @param uid UID
     * @param name Nombre
     * @param lastname Apellido
     * @param email Correo
     * @param cellphone Celular(Móvil)
     * @param addr Dirección
     * @param role Rol(client, driver)
     * @param score Puntuación
     */

    public i18n_role: string;
    public clc_score: number; //calculate

    constructor(
        public uid: string,
        public name: string,
        public lastname: string,
        public email: string,
        public cellphone: string,
        public addr: string,
        public role: string,
        public score: number,
    ) {
        this.i18n_role = this._role();
        this.clc_score = this._score();
    }

    private _role(): string {
        let role: any;
        switch (this.role) {
            case 'client':
                role = 'Cliente';
                break;
            case 'driver':
                role = 'Chofer';
                break;
            default:
                role = '';
                break;
        }
        return role;
    }

    private _score(): number {
        // actualizar score y retornar
        return this.score;
    }
}
