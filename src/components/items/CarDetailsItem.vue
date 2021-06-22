<template>
  {{ car }}
</template>

<script>
export default {
  name: "CarDetailsItem",
  props: ['car'],
  created() {
    console.log(this.car)
  }
}
</script>

<style scoped>

</style>