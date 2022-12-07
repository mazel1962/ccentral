<template>
    <div class="flex relative w-full h-full bg-gradient-to-b from-black via-black to-green-900 justify-center">
        <div class="z-0 flex grid grid-rows-4 grid-cols-4 absolute top-5 w-11/12 h-1/6 bg-slate-800 text-sky-100 rounded shadow-lg shadow-slate-400/50 hover:bg-slate-700 text-zinc-100 shadow-lg shadow-slate-400/50">
            <div class="z-0 flex row-start-1 row-end-1 col-start-1 col-end-1 text-zinc-100">{{userStore.nombreEmpresaPropietaria}}</div>
            <div class="z-0 flex row-start-1 row-end-1 col-start-2 col-end-2 text-zinc-100">{{ClienteStore.nombreEmpresaCliente}}</div>
            <div class="z-0 flex row-start-1 row-end-1 col-start-3 col-end-3"><label>PERIODO ANUAL CBTE..:</label>
                <select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.periodoanualcomprobante" required>
                    <option disabled value="">Año</option>
                    <option v-for="i in comprobanteStore.Periodos.codigoperiodo.length"
                        v-bind:key="comprobanteStore.Periodos.codigoperiodo[i - 1]"
                        v-bind:value="comprobanteStore.Periodos.codigoperiodo[i - 1]">
                        {{ comprobanteStore.Periodos.codigoperiodo[i - 1] }}
                    </option>
                </select> 
            </div>
            <div class="z-0 flex row-start-1 row-end-1 col-start-4 col-end-4"><label>MES CT.:</label>
                <select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.periodomescomprobante">
                    <option disabled value="">Mes</option>
                    <option value=1>Enero</option>
                    <option value=2>Febrero</option>
                    <option value=3>Marzo</option>
                    <option value=4>Abril</option>
                    <option value=5>Mayo</option>
                    <option value=6>Junio</option>
                    <option value=7>Julio</option>
                    <option value=8>Agosto</option>
                    <option value=9>Septiembre</option>
                    <option value=10>Octubre</option>
                    <option value=11>Noviembre</option>
                    <option value=12>Diciembre</option>                
                </select>
            </div>
            <div class="z-0 flex row-start-2 row-end-2 col-start-1 col-end-1"><label>TIPO:</label>
                <select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.tipocomprobante">
                    <option disabled value="">Tipo Comp</option>
                    <option value="C">Compra</option>
                    <option value="I">Ingreso</option>
                    <option value="E">Egreso</option>
                    <option value="T">Traspaso</option>
                </select>
            </div>
            <div class="z-0 flex row-start-2 row-end-2 col-start-2 col-end-2"><label>FOLIO COMPROBT:</label><input type="text" id="folio" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.foliocomprobante"  @change="ValidaFolioComprobante()" placeholder="Folio"></div>
            <div class="z-0 flex row-start-2 row-end-2 col-start-3 col-end-3"><label>FECHA COMPROBANTE:</label><input type="date" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.fechacomprobante"></div>
            <div class="z-0 flex row-start-2 row-end-2 col-start-4 col-end-4"><label>ESTADO:</label><select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.estadocomprobante">
                    <option disabled value="">Estado</option>
                    <option value="C">Centralizado</option>
                    <option value="A">Vigente</option>
                    <option value="N">Nulo</option>
                </select> </div>
            <div class="z-0 flex row-start-3 row-end-3 col-start-1 col-end-4 z-0"><label>GLOSA:</label><textarea class="bg-stone-300 text-slate-900 rounded h-12 w-3/4 hover:bg-blue-200 shadow-lg shadow-slate-400/50" v-model="comprobanteStore.glosacomprobante" placeholder="glosa general"></textarea>
                
                
            </div>
        </div>
        <div class="flex flex-nowrap overflow-y-auto grid grid-rows-50 grid-cols-13 absolute top-36 w-11/12 h-3/5 bg-slate-800 text-sky-100 rounded shadow-lg shadow-slate-400/50 hover:bg-slate-700 text-zinc-100 shadow-lg shadow-slate-400/50 z-0">
            <table class="z-0 table-fixed border-collapse border border-slate-400 rounded">
                <thead>
                    <tr>
                        <th><label>_#_</label></th>
                        <th><label>CODIGO</label></th>
                        <th><label>CUENTA</label></th>
                        <th><label>GLOSA</label></th>
                        <th><label>DEBE</label></th>
                        <th><label>HABER</label></th>
                        <th><label>AUXILIAR</label></th>
                        <th><label>R.SOCIAl</label></th>
                        <th><label>TIPO D</label></th>
                        <th><label>NUM D</label></th>
                        <th><label>FECHA D</label></th>
                        <th><label>VCTO D</label></th>
                        <th><label>TD REF</label></th>
                        <th><label>NUM REF</label></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in comprobanteStore.cbte.codcta.length">
                        <td><label>{{RenderIndice(i)}}</label></td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="codcta" v-model="comprobanteStore.cbte.codcta[i-1]" size="7"  @blur="ValidaCodigoCuenta(i-1)"></td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="nomcta" v-model="comprobanteStore.cbte.nomcta[i-1]" size="20" @keyup="NomctaAutoComplete(i-1)"></td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="glosa" v-model="comprobanteStore.cbte.glosa[i-1]" size="20" @blur="ValidaGlosa(i-1)"></td>
                        <td><input type="number" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="debe" v-model="comprobanteStore.cbte.debe[i-1]" size="7" @blur="ValidaDebe(i-1)"></td>
                        <td><input type="number" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="haber" v-model="comprobanteStore.cbte.haber[i-1]" size="7" @blur="ValidaHaber(i-1)"></td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="auxiliar" v-model="comprobanteStore.cbte.auxiliar[i-1]" size="7" @blur="ValidaAuxiliar(i-1)"></td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="razonsocial" v-model="comprobanteStore.cbte.razonsocial[i-1]" size="20" @keyup="RazonSocialAutoComplete(i-1)"></td>
                        <td><select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="tipodocto" v-model="comprobanteStore.cbte.tipodocto[i-1]">
                                <option disabled value="">TIPO MOV</option>
                                <option v-for="j in comprobanteStore.TipoMovimiento.codigotipomovimiento.length"
                                    v-bind:key="comprobanteStore.TipoMovimiento.codigotipomovimiento[j - 1]"
                                    v-bind:value="comprobanteStore.TipoMovimiento.codigotipomovimiento[j - 1]">
                                    {{ comprobanteStore.TipoMovimiento.nombretipomovimiento[j - 1] }}
                                </option>
                            </select>
                        </td>
                        <td><input type="number" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="numdocto" v-model="comprobanteStore.cbte.numdocto[i-1]" size="7"></td>
                        <td><input type="date" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="fechadocto" v-model="comprobanteStore.cbte.fechadocto[i-1]" size="7"></td>
                        <td><input type="date" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="vctodocto" v-model="comprobanteStore.cbte.vctodocto[i-1]" size="7"></td>
                        <td><select class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="tipodocref" v-model="comprobanteStore.cbte.tipodocref[i-1]">
                                <option disabled value="">TIPO MOV</option>
                                <option v-for="k in comprobanteStore.TipoMovimiento.codigotipomovimiento.length"
                                    v-bind:key="comprobanteStore.TipoMovimiento.codigotipomovimiento[k - 1]"
                                    v-bind:value="comprobanteStore.TipoMovimiento.codigotipomovimiento[k - 1]">
                                    {{ comprobanteStore.TipoMovimiento.nombretipomovimiento[k - 1] }}
                                </option>
                            </select>
                        </td>
                        <td><input type="text" class="bg-stone-300 text-slate-900 rounded hover:bg-blue-200 shadow-lg shadow-slate-400/50" name="numdocref" v-model="comprobanteStore.cbte.numdocref[i-1]" size="7" @blur="ValidaNumdocref(i)" @keyup="NumdocrefAutoComplete(i)"></td>
                    </tr>
                </tbody>    
            </table>    
        </div>    
        <div class="flex flex-row absolute bottom-5 w-11/12 justify-center items-center space-x-5 h-24 bg-slate-800 text-sky-100 rounded shadow-lg shadow-slate-400/50 hover:bg-slate-700 text-zinc-100 shadow-lg shadow-slate-700/50">
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">LINEAS</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">{{RenderIndice(comprobanteStore.totallineas)}}</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">DEBE</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">{{comprobanteStore.totaldebe.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">HABER</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg">{{comprobanteStore.totalhaber.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="GrabarComprobante()">GRABAR</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="SumarLineas()">SUMAR</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="ActualizarAuxiliar()">AUXILIAR</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="ActualizarPlanCuentas()">PLAN CTA</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="ActualizarCobranza()">COBRANZA</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="LimpiarComprobante()">LIMPIAR</button></div>
            <div class="flex font-sans font-medium justify-center items-center bg-slate-800 text-sky-100 rounded shadow-2xl h-16 w-48 hover:bg-teal-700 text-sky-100 shadow-lg"><button @click="AnularComprobante()">ANULAR</button></div>
        </div>
        <div v-if="planacs.busquedaCtas.nombrecuenta.length>0" class="absolute top-14 right-10 w-3/5 space-y-3">
            <ul v-if="planacs.busquedaCtas.nombrecuenta.length>0" class="w-3/4 rounded bg-zinc-300 text-slate-900 border border-zlate-900 px-4 py-2 space-y-1 z-10">
                <li class="px-1 pt-1 pb-2 font-bold border-b border-zlate-200">Rango {{ planacs.busquedaCtas.nombrecuenta.length }} total {{ planacs.plancuenta.nombrecuenta.length }} cuentas </li>
                <li v-for="c in planacs.busquedaCtas.nombrecuenta.length" v-bind:key="planacs.busquedaCtas.nombrecuenta[c-1]" @click="selecCuentaContable(c-1)" class="cursor-pointer hover:bg-gray-100 p-1">
                        {{ planacs.busquedaCtas.nombrecuenta[c-1] }}
                </li>
            </ul>
        </div>
        <div v-if="planacs.busquedaSneg.razonsocial.length>0" class="absolute top-14 left-10 w-3/5 space-y-3">
            <ul v-if="planacs.busquedaSneg.razonsocial.length>0" class="w-3/4 rounded bg-zinc-300 text-slate-900 border border-zlate-900 px-4 py-2 space-y-1 z-10">
                <li class="px-1 pt-1 pb-2 font-bold border-b border-zlate-200">Rango {{ planacs.busquedaSneg.razonsocial.length }} total {{ planacs.socionegocio.razonsocial.length }} auxiliares </li>
                <li v-for="c in planacs.busquedaSneg.razonsocial.length" v-bind:key="planacs.busquedaSneg.razonsocial[c-1]" @click="selecAuxiliar(c-1)" class="cursor-pointer hover:bg-gray-100 p-1">
                        {{ planacs.busquedaSneg.razonsocial[c-1] }}
                </li>
            </ul>
        </div>
        <div v-if="planacs.busquedaDocto.numeroreferencia.length>0" class="absolute top-14 left-10 w-3/5 space-y-3">
            <ul v-if="planacs.busquedaDocto.numeroreferencia.length>0" class="w-3/4 rounded bg-zinc-300 text-slate-900 border border-zlate-900 px-4 py-2 space-y-1 z-10">
                <li class="px-1 pt-1 pb-2 font-bold border-b border-zlate-200">Rango {{ planacs.busquedaDocto.numeroreferencia.length }} total {{ planacs.doctocobranza.numeroreferencia.length }} auxiliares </li>
                <li v-for="c in planacs.busquedaDocto.numeroreferencia.length" v-bind:key="planacs.busquedaDocto.numeroreferencia[c-1]" @click="selecNumeroReferencia(c-1)" class="cursor-pointer hover:bg-gray-100 p-1">
                    {{ planacs.busquedaDocto.tipodocref[c-1] }} -- {{ planacs.busquedaDocto.numeroreferencia[c-1] }} -- {{ planacs.busquedaDocto.saldocto[c-1] }}
                </li>
            </ul>
        </div>

    </div> 
</template>
<script setup>
import { useUserStore } from '../stores/user';
import { useClienteStore } from '../stores/clienteStore';
import { useComprobanteStore } from '../stores/comprobanteStore';
import { useACStore } from '../stores/Autocomplete';

const userStore = useUserStore();
const ClienteStore = useClienteStore();
const comprobanteStore = useComprobanteStore();
const planacs = useACStore();

comprobanteStore.inicioVectores();
comprobanteStore.obtenerperiodos(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`, 'CONTABILIDAD');
comprobanteStore.obtenertipomovimiento(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`);
planacs.planAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);
planacs.socioAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);
planacs.numerodoctorefAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);

const ValidaFolioComprobante = () =>{
     comprobanteStore.obtenercomprobantetotal(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`);
}

const RenderIndice = (indice) => {
    if(indice<10){
        return "00"+indice;
    }else{
        if(indice<100){
           return "0"+indice;
        }else{
           return indice;
        }   
    }
}

const ValidaCodigoCuenta = (i) =>{
     
    if(!comprobanteStore.obtenerctacontable(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`,i)){
        alert("Error codigo cuenta contable");
        return false;
    }
    redirNomCta(i-1)
}

const NomctaAutoComplete = (i) =>{
        if (comprobanteStore.cbte.nomcta[i] === '') {
          return 
        }
        let matches = 0
        planacs.busquedaCtas.nombrecuenta.length=0
        planacs.busquedaCtas.indice.length=0
        planacs.plancuenta.nombrecuenta.filter(plancta => { if (plancta.toLowerCase().includes(comprobanteStore.cbte.nomcta[i].toLowerCase()) && matches < 15) {
            planacs.busquedaCtas.nombrecuenta.push(plancta)
            planacs.busquedaCtas.indice.push(i)
            matches++  
        }})
    }

const selecCuentaContable = (idx) => {
        const ia = planacs.plancuenta.nombrecuenta.findIndex(cta => cta === planacs.busquedaCtas.nombrecuenta[idx]);
        const index = planacs.busquedaCtas.indice[idx]
        comprobanteStore.cbte.nomcta[index]=planacs.busquedaCtas.nombrecuenta[idx]
        comprobanteStore.cbte.codcta[index]=planacs.plancuenta.codigoctacontable[ia]
        planacs.busquedaCtas.nombrecuenta.length=0
        planacs.busquedaCtas.indice.length=0
        redirNomCta(index-1)
        
}

const RazonSocialAutoComplete = (i) =>{
        if (comprobanteStore.cbte.razonsocial[i] === '') {
          return 
        }
        let matches = 0
        planacs.busquedaSneg.razonsocial.length=0
        planacs.busquedaSneg.indice.length=0
        planacs.socionegocio.razonsocial.filter(socneg => { if (socneg.toLowerCase().includes(comprobanteStore.cbte.razonsocial[i].toLowerCase()) && matches < 15) {
            planacs.busquedaSneg.razonsocial.push(socneg)
            planacs.busquedaSneg.indice.push(i)
            matches++
        }})
    }

const selecAuxiliar = (idx) => {
        const ia = planacs.socionegocio.razonsocial.findIndex(cta => cta === planacs.busquedaSneg.razonsocial[idx]);
        const index = planacs.busquedaSneg.indice[idx]
        comprobanteStore.cbte.razonsocial[index]=planacs.busquedaSneg.razonsocial[idx]
        comprobanteStore.cbte.auxiliar[index]=planacs.socionegocio.codigosocionegocio[ia]
        planacs.busquedaSneg.razonsocial.length=0
        planacs.busquedaSneg.indice.length=0
        redirRazonSocial(index-1)
        
}

const NumdocrefAutoComplete = (i) =>{

      let matches = 0
      planacs.busquedaDocto.indice.length=0
      planacs.busquedaDocto.numeroreferencia.length=0
      planacs.busquedaDocto.saldocto.length=0
      planacs.busquedaDocto.tipodocref.length=0
      for(let ij=0;ij<planacs.doctocobranza.codigosocionegocio.length;ij++){
          if(planacs.doctocobranza.numeroreferencia[ij].includes(comprobanteStore.cbte.numdocref[i].trim()) && planacs.doctocobranza.codigosocionegocio[ij].trim()===comprobanteStore.cbte.auxiliar[i].trim() && planacs.doctocobranza.codigoctacontable[ij].trim()===comprobanteStore.cbte.codcta[i].trim() && 
          planacs.doctocobranza.tipodocref[ij].trim()===comprobanteStore.cbte.tipodocref[i].trim() && matches < 15){
                planacs.busquedaDocto.numeroreferencia.push(planacs.doctocobranza.numeroreferencia[ij])
                planacs.busquedaDocto.tipodocref.push(planacs.doctocobranza.tipodocref[ij])
                planacs.busquedaDocto.saldocto.push(planacs.doctocobranza.saldocto[ij])
                planacs.busquedaDocto.indice.push(i)
                matches++

          }
      }
  /*    planacs.doctocobranza.numeroreferencia[ij].includes(comprobanteStore.cbte.numdocref[i]) */
}

const selecNumeroReferencia = (idx) => {
      const index = planacs.busquedaDocto.indice[idx]
      comprobanteStore.cbte.numdocref[index]=planacs.busquedaDocto.numeroreferencia[idx]
      planacs.busquedaDocto.indice.length=0
      planacs.busquedaDocto.numeroreferencia.length=0
      planacs.busquedaDocto.saldocto.length=0
      planacs.busquedaDocto.tipodocref.length=0
}

const ValidaGlosa = (i) =>  {
    redirGlosa(i-1) 
}
const ValidaDebe = (i) => {
    
    SumarLineas()
    
    if(comprobanteStore.cbte.debe[i]===0){
       redirDebe(i-1,0)
    }else{
       redirDebe(i-1,1)
    }

}
const ValidaHaber = (i) => {
    
    SumarLineas()
    
/*    if(comprobanteStore.cbte.debe[i]==0 && comprobanteStore.cbte.haber[i]==0){
        alert("ERROR DIGITE VALOR HABER");
        return false;
    } */
    redirHaber(i-1)
}
const ValidaAuxiliar =(i) => {
    if(!comprobanteStore.obtenerauxiliar(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`,i)){
        alert("Error codigo auxiliar");
        return false;
    }
    redirAuxiliar(i-1)
    
}
const ValidaNumdocref = (i) =>{
    
    return
}
const GrabarComprobante = () =>{
      SumarLineas();
      if(comprobanteStore.totaldebe!=comprobanteStore.totalhaber){
        alert("ERROR: COMPROBANTE DESCUADRADO");
      }
      comprobanteStore.grabarComprobante(`${userStore.identificadorEmpresaPropietaria}`, `${ClienteStore.identificadorEmpresaCliente}`);
}
const SumarLineas = () =>{
    comprobanteStore.totallineas=parseInt(0)
    comprobanteStore.totaldebe=parseInt(0)
    comprobanteStore.totalhaber=parseInt(0)
    for(let ij=0;ij<150;ij++){
        if(parseInt(comprobanteStore.cbte.debe[ij])>0){
            comprobanteStore.totaldebe = parseInt(comprobanteStore.totaldebe) + parseInt(comprobanteStore.cbte.debe[ij])
            comprobanteStore.totallineas = comprobanteStore.totallineas + 1 
        }
        if(parseInt(comprobanteStore.cbte.haber[ij])>0){
            comprobanteStore.totalhaber = parseInt(comprobanteStore.totalhaber) + parseInt(comprobanteStore.cbte.haber[ij])
            comprobanteStore.totallineas = comprobanteStore.totallineas + 1 
        }
    }
}
const ActualizarPlanCuentas = () =>{
    planacs.planAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);
}
const ActualizarAuxiliar = () =>{
    planacs.socioAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);
}
const ActualizarCobranza = () =>{
    planacs.numerodoctorefAutoComplete(`${userStore.identificadorEmpresaPropietaria}`,`${ClienteStore.identificadorEmpresaCliente}`);
}
const LimpiarComprobante = () =>{
    comprobanteStore.inicioEncabezado();
    comprobanteStore.inicioVectores();
}
const AnularComprobante = () =>{

}
function redirNomCta(index)
{
    document.getElementsByName("glosa")[index].focus();
}
function redirGlosa(index)
{
    document.getElementsByName("debe")[index].focus();
}
function redirDebe(index,foco){
    if(foco==0){
        document.getElementsByName("haber")[index].focus();
    }else{
        if(comprobanteStore.cbte.aux01[index + 1]==0){
           document.getElementsByName("codcta")[index+1].focus();
        }else{
            document.getElementsByName("auxiliar")[index].focus();
        }
    }
}
function redirHaber(index){
    if(comprobanteStore.cbte.aux01[index + 1]==0){
        document.getElementsByName("codcta")[index+1].focus();
    }else{
        document.getElementsByName("auxiliar")[index].focus();
    }
}
function redirAuxiliar(index)
{
    document.getElementsByName("tipodocto")[index].focus();
}
function redirRazonSocial(index)
{
    document.getElementsByName("tipodocto")[index].focus();
}
</script>
