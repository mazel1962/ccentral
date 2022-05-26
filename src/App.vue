<template>
  <div class="grid grid-rows-2 grid-cols-12 gap-0">  
    <div class="bg-yellow-400 row-start-1 row-end-3 h-32 col-start-1 col-end-3">01</div>
    <div class="bg-yellow-400 row-start-1 row-end-2 h-16 col-start-3 col-end-11">02</div>
    <div class="bg-yellow-100 row-start-2 row-end-3 h-16 col-start-3 col-end-11">03</div>
    <div class="bg-yellow-400 text-neutral-900 row-start-1 row-end-3 h-32 col-start-11 col-end-13">
      <div class="grid grid-rows-4 grid-cols-6 gap-0 bg-yellow-400 text-neutral-900">    
        <div class="bg-yellow-400 text-neutral-900 row-start-2 row-end-3 col-start-2 col-end-4 h-8">Usuario</div>
        <div class="bg-yellow-400 text-neutral-900 row-start-2 row-end-3 col-start-4 col-end-6 h-8"><input type="text" size="15" v-model="idUsuario" placeholder="Usuario"></div>
        <div class="bg-yellow-400 text-neutral-900 row-start-3 row-end-4 col-start-2 col-end-4 h-8">Contraseña</div>
        <div class="bg-yellow-400 text-neutral-900 row-start-3 row-end-4 col-start-4 col-end-6 h-8"><input type="text" size="15" v-model="pwUsuario" placeholder="Contrasena"></div>
        <div class="bg-sky-900 text-plata text-center row-start-4 row-end-5 col-start-3 col-end-5 h-8"><button @click="ValidaUsuario()">Ingresar</button></div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-0">
    <div class="bg-sky-900 row-start-1  text-plata h-32 col-start-1 h-[683px] col-end-3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Aliquam vitae cupiditate impedit asperiores molestias sed molestiae exercitationem nulla deserunt. Qui vero dignissimos dolor, nam eveniet omnis recusandae explicabo temporibus. Nobis.</div> 
    <div class="bg-plata row-start-1 h-32 col-start-3 h-[683px] col-end-13">06 <router-view></router-view></div>   
  </div>

  <!-- <div class="grid grid-rows-1 grid-cols-12">
    <div class="bg-emerald-900 row-span-1 h-[700px] col-span-2">05</div>
    <div class="bg-plata row-span-1 h-[700px] col-span-10">06</div>
  </div>  -->
 
   <div class="grid grid-cols-12 gap-0">
    <div class="bg-sky-900 row-start-1 row-end-3 col-start-1 h-32 w-full col-end-13">09</div> 
  </div>

  <!-- <div class="grid grid-rows-1 grid-cols-12">
    <div class="absolute bottom-0 bg-emerald-900 row-span-1 h-32 w-full col-span-12">09</div>
  </div> -->
</template>
<script setup>
   import { ref } from 'vue';
   import { useUserStore } from './stores/user';
  
   const idUsuario = ref('');
   const pwUsuario = ref('');

   const userStore = useUserStore()

   const ValidaUsuario = () => {
       userStore.registerUsuario(idUsuario.value,pwUsuario.value)
   }
</script>
<style>

</style>