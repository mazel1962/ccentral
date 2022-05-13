<!-- SECCION DE LOS TEMPLATE -->
<template>
<div class="grid grid-cols-4 gap-4">
 <div class="flex m-10 bg-gray-200 mt-5 m-2 p-3 hover:bg-gray-300 w-1/4">
    <draggable class="dragArea list-group w-full" :list="list" @change="log" group = "task">
      <div 
        class="list-group-item talon"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>

  <div class="flex m-10 bg-gray-200 mt-5 m-2 p-3 hover:bg-gray-300 w-1/4">
    <draggable class="dragArea list-group w-full" :list="lista1" @change="log" group = "task">
      <div 
        class="list-group-item talon"
        v-for="element in lista1"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>
  </div>
</template>
<!-- SECCION DE LOS SCRIPT-->
<script>
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  export default defineComponent({
    components: {
      draggable: VueDraggableNext,
    },
    data() {
      return {
        enabled: true,
        list: [
          { name: 'John Lennon', id: 1 },
          { name: 'Paul McCartney', id: 2 },
          { name: 'Ringo Starr', id: 3 },
          { name: 'George Harrison', id: 4 },
        ],
        lista1: [
          { name: 'Madonna', id: 1 },
          { name: 'Prince', id: 2 },

        ],
        dragging: false,
      }
    },
    methods: {
      log(event) {
        console.log(event)
      },
    },
  })
</script>
