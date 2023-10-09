<template>

  <div class="h-[100vh] flex justify-center items-center bg-rose">
    <div>
      <img :src="pngs[0]" class="h-[197px]"/>
    </div>
  </div>

</template>

<script>
  import { Logo2 } from '@/utilities/png';

  export default {
    created() {
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000);  
    },
    data() {
      return {
        pngs: [ Logo2 ]
      }
    }
  }

</script>