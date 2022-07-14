import { defineComponent} from "vue";
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
    components:{
        draggable: VueDraggableNext,
    },
    data() {
    return {
      enabled: true,
      dragging: false,
    };
  },
  methods: {
    log(event) {
        console.log(event)
      },
  },
})    