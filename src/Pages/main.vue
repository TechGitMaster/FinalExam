<template>
  <!--<router-link to="/">Home</router-link>
  <router-link :to="{ name: 'Index' }" >Index</router-link>
  <router-view />-->

  <div :class="`${showNav ? 'min-w-[400px] h-[100vh]':''} 
    ${ !showHeaderComponent ? 'pb-[0px]': linkUrl === '/home' ? 'pb-[90px]':'pb-[20px]'} relative`">

    <div 
        v-if="showNav" 
        @click="showNavF()"
        class="bg-[#0909096c] w-full h-[100vh] absolute top-0 left-0 z-10 "></div>

    <!--___Header___-->
    <div v-if="showHeaderComponent" class="mb-4 p-3">
      <Header :showNavF="showNavF" :linkUrl="linkUrl" />
    </div>

    <!--___Routes___-->
    <router-view />
  </div>

</template>

<script>
  import Header from '../components/Header/index.vue';    

  export default {
    props: [ 'showHeaderComponent', 'linkUrl', 'showNavF', 'showNav' ],
    components: {
      Header,
    },
    data(){
      return {
      }
    },
  }

</script>