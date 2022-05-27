import { defineStore} from "pinia";

export const useUserStore = defineStore('userStore',{
    state: () => ({
        arreglo:[],
        identificadorUsuario: ' ',
        passwordUsuario: ' ',
        nombreUsuario: ' ',
    }),
    actions: {
      async registerUsuario(usuario,clave){
        alert(clave)
          try{
              const pars = '&codusuario='+usuario;
              const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/entrada?'+pars,{
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
              }     
              )
              const data = await res.json();
              if(clave!=data.contrasena)
                {
                  alert("ERROR DATOS NO CORRESPONDEN")
                  return;
                }
              this.identificadorUsuario = data.codigousuario;
              this.passwordUsuario = data.contrasena;
              this.nombreUsuario = data.nombreusuario;
              
          }catch (error){ 
            alert("ERROR EN AUTENTICACION")
            console.error();
          }
        },
     }   
})
