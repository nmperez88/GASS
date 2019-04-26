export class User {

    /**
     * Define los datos del usuario de la aplicación
     * @param uid UID
     * @param name Nombre
     * @param lastname Apellido
     * @param email Correo
     * @param cellphone Celular(Móvil)
     * @param addr Dirección
     */
    constructor(
        public uid: string,
        public name: string,
        public lastname: string,
        public email: string,
        public cellphone: string,
        public addr: string,
    ) { }
}
