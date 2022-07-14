<template >
  <div class="container-ext" :style="styles">
    <div class="group-name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isGroup: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    styles() {
      var style = ` --group-name-size: 1rem;
                    --cards-shift: 4px;
                    --shadow-size: 3px;`;
      return style;
    },
  },
  data() {
    return {
      name: "name",
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

.xxx {
  /* */
  display: flex;
  justify-content: center;
  align-items: center;
  /* */
}
.group-name {
  padding-left: var(--cards-shift);
  padding-top: 0px;
  font-size: var(--group-name-size);
  height: var(--group-name-size);
  /**/
  background-color: lightslategray; /**/
}
.container-ext {
  min-width: 50px;
  min-height: 50px;
  height: 50px;
  position: relative;

  background-color: red; /**/
  border: 1px dashed blue;
  width: calc(100% - 46px);
    /* */
  display: flex;
  justify-content: center;
  align-items: streach;
  /* */
}

.container-card {
  width: 100%;
  height: calc(100% - var(--group-name-size));
  position: relative;
}

.box {
  width: calc(100% - var(--cards-shift) - var(--shadow-size));
  height: calc(100% - var(--cards-shift) - var(--shadow-size));
  position: absolute;
  top: 0px;
  left: 0px;

  box-shadow: var(--shadow-size) var(--shadow-size) 3px rgba(0, 0, 0, 0.45);
  background: rgb(252, 195, 91); /**/
}


</style>