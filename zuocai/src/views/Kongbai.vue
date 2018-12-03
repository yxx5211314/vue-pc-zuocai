<template>
  
</template>
<script>
  export default{
    data(){
        this.$router.replace({
            path:'/login/user',
            name:'user'
        })
        return {n:""}
    },
        mounted() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    },

  }
</script>
<style scoped>
</style>
