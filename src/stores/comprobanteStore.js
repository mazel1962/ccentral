import { defineStore} from "pinia";

export const useComprobanteStore = defineStore('comprobanteStore',{

    state: () => ({ 
      TipoMovimiento:{codigotipomovimiento:[],nombretipomovimiento:[]},
      Periodos:{codigoperiodo:[]},
      numerointerno:0,
      periodoanualcomprobante:0,
      periodomescomprobante:0,
      foliocomprobante:0,
      str:'',
      fechacomprobante: '',
      tipocomprobante:'',
      estadocomprobante:'',
      glosacomprobante:'',
      totallineas:0,
      totaldebe:0,
      totalhaber:0,
      cbte:{codcta:[],aux01:[],nomcta:[],glosa:[],debe:[],haber:[],auxiliar:[],razonsocial:[],tipodocto:[],numdocto:[],fechadocto:[],vctodocto:[],tipodocref:[],numdocref:[]},
    }),
    actions:{
        inicioEncabezado(){
          this.numerointerno=0
          this.periodoanualcomprobante=0
          this.periodomescomprobante=0
          this.foliocomprobante=0
          this.str=''
          this.fechacomprobante=''
          this.tipocomprobante=''
          this.estadocomprobante=''
          this.glosacomprobante=''
          this.totallineas=0
          this.totaldebe=0
          this.totalhaber=0
        },
        inicioVectores(){
          this.cbte.codcta.length=0;
          this.cbte.aux01.length=0;
          this.cbte.nomcta.length=0;
          this.cbte.glosa.length=0;
          this.cbte.debe.length=0;
          this.cbte.haber.length=0;
          this.cbte.auxiliar.length=0;
          this.cbte.razonsocial.length=0;
          this.cbte.tipodocto.length=0;
          this.cbte.numdocto.length=0;
          this.cbte.fechadocto.length=0;
          this.cbte.vctodocto.length=0;              
          this.cbte.tipodocref.length=0;
          this.cbte.numdocref.length=0;
          this.str = new Date(new Date());
          for(let i=0;i<150;i++){
             this.cbte.codcta.push(" ");
             this.cbte.aux01.push(0);
             this.cbte.nomcta.push(" ");
             this.cbte.glosa.push(" ");
             this.cbte.debe.push(0);
             this.cbte.haber.push(0);
             this.cbte.auxiliar.push(" ");
             this.cbte.razonsocial.push(" ");
             this.cbte.tipodocto.push(" ");
             this.cbte.numdocto.push(0);
             this.cbte.fechadocto.push(this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate())
             this.cbte.vctodocto.push(this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate())              
             this.cbte.tipodocref.push(" ");
             this.cbte.numdocref.push(" ");
          }
        },
        async grabarComprobante(codigoempresapropietaria, codigoempresapropietariacliente){
          var pars = '&codigoempresaduena=' + codigoempresapropietaria + '&codigoempresa=' + codigoempresapropietariacliente;
          pars = pars +'&periodoanual='+this.periodoanualcomprobante+'&periodomes='+this.periodomescomprobante+'&folio='+this.foliocomprobante;
          pars = pars +'&fecha='+this.fechacomprobante+'&tipo='+this.tipocomprobante+'&glosa='+this.glosacomprobante;  
          for(let i=0;i<150;i++){
            if(parseInt(this.cbte.debe[i])>0 || parseInt(this.cbte.haber[i])>0){
              pars = pars + '&codcta='+ this.cbte.codcta[i];
              pars = pars + '&glosadet=' + this.cbte.glosa[i];
              pars = pars + '&debe=' + this.cbte.debe[i];
              pars = pars + '&haber=' + this.cbte.haber[i];
              pars = pars + '&auxiliar=' + this.cbte.auxiliar[i];
              pars = pars + '&tipodocto=' + this.cbte.tipodocto[i];
              pars = pars + '&numdocto=' + this.cbte.numdocto[i];
              pars = pars + '&fechadocto=' + this.cbte.fechadocto[i];
              pars = pars + '&vctodocto=' + this.cbte.vctodocto[i];              
              pars = pars + '&tipodocref=' + this.cbte.tipodocref[i];
              pars = pars + '&numdocref=' + this.cbte.numdocref[i];
            }
          }
          try{
              const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/actualizarcomprobante?' + pars,{
              method: 'GET',
              mode: 'cors',
              headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
            })
            if(res.ok==false || res.status!=200){
              alert("ERROR REPOSITORIO DE DATOS")
              return;
            }
            const data = await res.json();
          }catch(error){
            alert("Error en Tipo Movimiento :   " + error )
              console.error();
          }

        },
        async obtenertipomovimiento(codigoempresapropietaria, codigoempresapropietariacliente){
            
          try{
                const pars = '&codigoempresaduena=' + codigoempresapropietaria + '&codigoempresa=' + codigoempresapropietariacliente;     
                const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listatipomovimiento?' + pars,{
                  method: 'GET',
                  mode: 'cors',
                  headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
                })
                if(res.ok==false || res.status!=200){
                  alert("ERROR REPOSITORIO DE DATOS")
                  return;
                }
                const data = await res.json();
                this.TipoMovimiento.codigotipomovimiento.length=0;
                this.TipoMovimiento.nombretipomovimiento.length=0;
                if (typeof data.length === 'undefined'){
                    this.TipoMovimiento.codigotipomovimiento.push(data.codigotipomovimiento);
                    this.TipoMovimiento.nombretipomovimiento.push(data.nombretipomovimiento);
                }else{
                    this.TipoMovimiento.codigotipomovimiento = data.map(tipomovdata => tipomovdata.codigotipomovimiento);
                    this.TipoMovimiento.nombretipomovimiento = data.map(tipomovdata => tipomovdata.nombretipomovimiento);
                  }
            }catch (error){
              alert("Error en Tipo Movimiento :   " + error )
              console.error();
            }
        }, 
        async obtenerperiodos(codigoempresapropietaria, codigoempresapropietariacliente, codigosistema){
            
            try{
                  const pars = '&codigoempresapropietaria=' + codigoempresapropietaria + '&codigoempresapropietariacliente=' + codigoempresapropietariacliente  + '&codigosistema=' + codigosistema;     
                  const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listadoperiodosistema?' + pars,{
                    method: 'GET',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
                  })
                  if(res.ok==false || res.status!=200){
                    alert("ERROR REPOSITORIO DE DATOS")
                    return;
                  }
                  const data = await res.json();
                  this.Periodos.codigoperiodo.splice(0,this.Periodos.codigoperiodo.length)
                  if (typeof data.length === 'undefined'){
                      this.Periodos.codigoperiodo.push(data.ano);
                  }else{
                      this.Periodos.codigoperiodo = data.map(periodosdata => periodosdata.ano);
                  }
              }catch (error){
                alert("Error en Sistemas Periodos :   " + error )
                console.error();
              }
        }, 
        async obtenercomprobantetotal(codigoempresapropietaria,codigoempresacliente){
            try{
                const pars = '&codigoempresapropietaria=' + codigoempresapropietaria + '&codigoempresacliente=' + codigoempresacliente + '&periodoanual=' + this.periodoanualcomprobante + '&periodomensual=' + this.periodomescomprobante + '&tipocomprobante=' + this.tipocomprobante + '&foliocomprobante=' + this.foliocomprobante;  
                const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/obtenercomprobantetotal?' + pars,{
                  method: 'GET',
                  mode: 'cors',
                  headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
                })
                if(res.ok==false || res.status!=200){
                  alert("ERROR REPOSITORIO DE DATOS")
                  return;
                }
                const data = await res.json();
                this.numerointerno=data.numerointerno;
                this.periodoanualcomprobante=data.periodoanual;
                this.periodomescomprobante=data.periodomes;
                this.foliocomprobante=data.foliocomprobante;
                this.tipocomprobante=data.tipocomprobante;
                this.str = new Date(data.fechacomprobante);
                this.fechacomprobante=this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate();
                this.glosacomprobante=data.glosa;
                this.estadocomprobante=data.estadocomprobante;
                    
            }catch (error){
              alert("Error en Comprobante Encabezado :   " + error )
              console.error();
            }
          try{
              const pars1 = '&numerointerno=' + this.numerointerno + '&foliocomprobante=' + this.foliocomprobante;  
              const res1 = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/listadocomprobantedetalle?' + pars1,{
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
              })
              if(res1.ok==false || res1.status!=200){
                alert("ERROR REPOSITORIO DE DATOS")
                return;
              }
              const data1 = await res1.json();
              if (typeof data1.length === 'undefined'){
                this.cbte.codcta[0]=data1.codigoctacontable;
                this.cbte.glosa[0]=data1.glosa;
                this.cbte.debe[0]=data1.debe;
                this.cbte.auxiliar[0]=data1.codigoauxiliar;
                this.cbte.tipodocto[0]=data1.tipomovdocto;
                this.cbte.numdocto[0]=data1.nummovdocto;
                this.str = new Date(data1.fechadocto);
                this.cbte.fechadocto[0]=this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate();
                this.str = new Date(data1.fechavctodocto);
                this.cbte.vctodocto[0]=this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate();
                this.cbte.tipodocref[0]=data1.tipomovdoctoreferencia;
                this.cbte.numdocref[0]=data1.numdoctoreferencia;
              }else{
                for(let ji=0;ji<data1.length;ji++){
                this.cbte.codcta[ji] = data1[ji].codigoctacontable;
                this.cbte.glosa[ji] = data1[ji].glosa;
                this.cbte.debe[ji] = data1[ji].debe;
                this.cbte.haber[ji] = data1[ji].haber;
                this.cbte.auxiliar[ji] = data1[ji].codigoauxiliar;
                this.cbte.tipodocto[ji] = data1[ji].tipomovdocto;
                this.cbte.numdocto[ji] = data1[ji].nummovdocto;
                this.str = new Date(data1[ji].fechadocto);
                this.cbte.fechadocto[ji]=this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate();
                this.str = new Date(data1[ji].fechavctodocto);
                this.cbte.vctodocto[ji]=this.str.getFullYear() + '-' + ((this.str.getMonth() < 9) ? '0' : '') + (this.str.getMonth() + 1) + '-' + ((this.str.getDate() < 10) ? '0' : '') + this.str.getDate();
                this.cbte.tipodocref[ji] = data1[ji].tipomovdoctoreferencia;
                this.cbte.numdocref[ji] = data1[ji].numdoctoreferencia;
                }
              }
          }catch (error){
            alert("Error en Comprobante Detalle :   " + error )
            console.error();
          }
      }, 
      async obtenerctacontable(codigoempresapropietaria, codigoempresapropietariacliente,index){
            
        try{
              const pars = '&codigoempresaduena=' + codigoempresapropietaria + '&codigoempresa=' + codigoempresapropietariacliente + '&codigoctacontable='+this.cbte.codcta[index];     
              const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/obtenerctacontable?' + pars,{
                method: 'GET',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
              })
              if(res.ok==false || res.status!=200){
                return false;
              }
              const data = await res.json();
              this.cbte.aux01[index]=data.auxiliar;
              this.cbte.nomcta[index]=data.nombrecuenta;
              return true;
            }catch (error){
              return false;
          }
      }, 
      async obtenerauxiliar(codigoempresapropietaria,codigoempresapropietariacliente,index){
        try{
          const pars = '&codigoempresaduena=' + codigoempresapropietaria + '&codigoempresa=' + codigoempresapropietariacliente + '&codigosocionegocio='+this.cbte.auxiliar[index];     
          const res = await fetch('http://192.168.0.122:40280/MazelHazana/mztv/tov/obtenersocionegocio?' + pars,{
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',"Access-Control-Request-Method": "*"},
          })
          if(res.ok==false || res.status!=200){
            return false;
          }
          const data = await res.json();
          this.cbte.razonsocial[index]=data.razonsocial;
          return true;
        }catch (error){
           return false;
        }
      }, 
    }
})    