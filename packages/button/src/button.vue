<template>
  <div class="mc-button" @click="handleClick">
    {{label}}
  </div>
</template>
<script>
  export default{
    name: "McButton",
    components: {},
    props: {
      label: String
    },
    methods: {
      handleClick() {
        console.log('我点击了')
      }
    }
  }
</script>
<style scoped>
.mc-button{
  display: flex;
  justify-content: center;
  align-items: center;
  color: aqua;
  cursor: pointer;
}
</style>>