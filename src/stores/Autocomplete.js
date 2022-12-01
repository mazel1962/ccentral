import {defineStore} from "pinia";

export const useACStore = defineStore('autocompleteStore',{
    state: () => ({
      busquedaCtas:{indice:[],nombrecuenta:[]},
      plancuenta:{codigoctacontable:[],nombrecuenta:[]},
      busquedaSneg:{indice:[],razonsocial:[]},
      socionegocio:{codigosocionegocio:[],razonsocial:[]},
      busquedaDocto:{indice:[],numeroreferencia:[],saldocto:[],tipodocref:[]},
      doctocobranza:{tipodocref:[],codigoctacontable:[],numeroreferencia:[],saldocto:[],codigosocionegocio:[]},
    }),
    actions: {
       async planAutoComplete(codigoempresaduena,codigoempresa){
            try{
                const pars = '&codigoempresaduena='+codigoempresaduena+'&codigoempresa='+codigoempresa;
                const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listadoplancuentaordenado?'+pars,{
                  method: 'GET',
                  mode: 'cors',
                  headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
                }     
                )
                if(res.ok==false || res.status!=200){
                  alert("ERROR REPOSITORIO DE DATOS")
                  return;
                }
                const data = await res.json();
                this.plancuenta.codigoctacontable = data.map(plancuentadata => plancuentadata.codigoctacontable);
                this.plancuenta.nombrecuenta = data.map(plancuentadata => plancuentadata.nombrecuenta);
            }catch (error){ 
              alert("ERROR OBTENCION PLAN DE CUENTA")
              return;
            }
          
        },
       async socioAutoComplete(codigoempresaduena,codigoempresa){
        try{
          const pars = '&codigoempresaduena='+codigoempresaduena+'&codigoempresa='+codigoempresa;
          const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listadosocionegocioordenado?'+pars,{
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
          }     
          )
          if(res.ok==false || res.status!=200){
            alert("ERROR REPOSITORIO DE DATOS")
            return;
          }
          const data = await res.json();
          this.socionegocio.codigosocionegocio = data.map(socneg => socneg.codigosocionegocio);
          this.socionegocio.razonsocial = data.map(socneg => socneg.razonsocial);
      }catch (error){ 
        alert("ERROR OBTENCION SOCIO NEGOCIO")
        return;
      }
    }, 
    async numerodoctorefAutoComplete(codigoempresaduena,codigoempresa){
      try{
        const pars = '&codigoempresaduena='+codigoempresaduena+'&codigoempresa='+codigoempresa;
        const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listadocobranzacomprobante?'+pars,{
          method: 'GET',
          mode: 'cors',
          headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
        }     
        )
        if(res.ok==false || res.status!=200){
          alert("ERROR REPOSITORIO DE DATOS")
          return;
        }
        const data = await res.json();
        this.doctocobranza.tipodocref = data.map(doccob => doccob.tipomovdoctoreferencia);
        this.doctocobranza.numeroreferencia = data.map(doccob => doccob.numdoctoreferencia);
        this.doctocobranza.saldocto = data.map(doccob => doccob.debe-doccob.haber);
        this.doctocobranza.codigoctacontable = data.map(doccob=> doccob.codigoctacontable)
        this.doctocobranza.codigosocionegocio = data.map(doccob=> doccob.codigoauxiliar)
    }catch (error){ 
      alert("ERROR OBTENCION COBRANZA AUXILIAR")
      return;
    }
  },    
}})
