<template>
    <div class="grid grid-rows-12 grid-cols-3 gap-0 bg-plata text-sky-900 h-120 w-full rounded">
        <div ></div>


    </div>
 
         <div class="bg-fuchsia-900 text-amber-50 row-start-1 row-end-5 col-start-1 col-end-3 text-center">Propietario</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-3 col-end-6">{{userStore.nombreEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-5 col-end-8">{{userStore.rutEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-7 col-end-10">{{userStore.girocomercialEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-3 col-end-6">{{userStore.direccionEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-5 col-end-8">{{userStore.comunaEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-7 col-end-10">{{userStore.ciudadEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-3 col-end-6">{{userStore.paisEmpresaPropietaria}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-5 col-end-8">{{userStore.identificadorUsuario}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-7 col-end-10">{{userStore.nombreUsuario}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-7 col-end-10">{{userStore.identificadorEmpresaPropietaria}}</div>

    <div class="grid grid-rows-4 grid-cols-12 gap-0 bg-fuchsia-900 text-amber-50 h-32 w-full rounded">
         <div class="bg-fuchsia-900 text-amber-50 row-start-1 row-end-5 col-start-1 col-end-3 text-center">Cliente</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-3 col-end-6">{{ClienteStore.identificadorEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-5 col-end-8">{{ClienteStore.nombreEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-1 row-end-2 col-start-7 col-end-10">{{ClienteStore.girocomercialEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-3 col-end-6">{{ClienteStore.direccionEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-5 col-end-8">{{ClienteStore.comunaEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-2 row-end-3 col-start-7 col-end-10">{{ClienteStore.ciudadEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-3 col-end-6">{{ClienteStore.paisEmpresaCliente}}</div>
         <div class="bg-orange-500 text-sky-900 h-8 row-start-3 row-end-4 col-start-5 col-end-8">{{ClienteStore.contactoEmpresaCliente}}</div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import { useClienteStore} from '../stores/clienteStore';
  
const userStore = useUserStore()
const ClienteStore = useClienteStore()


</script>
