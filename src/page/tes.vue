<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

export default {
    props: [],
    components: {
      
  },
  data() {
    return {
        results: [{id: 1}, {id: 2}, {id: 3}],
    check: true
    };
  },
  computed: {
   getRefName() {
     return item => {
      if(this.check) return `foo_${item.id}`;
     }
   }
  },
  mounted() {
    console.log(this.$refs);
  }
};
</script>

<template>
<div id="app">
<div v-for="(result, index) in results" :key="index">
    <input type="text" :ref="getRefName(result)" />
    {{ result.id }}
</div>
</div>
</template>

<style scoped>

</style>
