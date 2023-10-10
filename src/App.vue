<template>

  <!--______Loading Inverted_________-->
  <div v-if="!doneLoading" class="h-[100vh] flex justify-center items-center bg-rose">
    <div>
      <img :src="pngs[0]" class="h-[197px]"/>
    </div>
  </div>

  <!--______Main Route______-->
  <router-view v-else/>

</template>

<script>
  import { Logo2 } from '@/utilities/png';

  export default {
    created() {
      const token = localStorage.getItem('token');

      setTimeout(() => {
        this.doneLoading = true;
        this.$router.push(token === null || token === '' ? '/login' : 
        this.$route.path === '/login' || this.$route.path === '/' ? '/home' : this.$route.path);
      }, 2000); 
    },
    data() {
      return {
        pngs: [ Logo2 ],
        doneLoading: false
      }
    }
  }

</script>