<template>
  <div class="flex">

    <Transition>
      <div v-show="showNav" :class="`${showNav ? 'LeftNav': 'LeftNavClose'}`">
        <LeftSideNavigation />
      </div>
    </Transition>
    <div :class="`${showNav ? 'w-[20%]':'w-full'} overflow-hidden`" :style="showNav ? 'transition: 0.3s ease-in;': ''">
      <div :class="`${showNav ? 'h-[100vh]':''}
        ${ linkUrl === '/home' ? 'pb-[90px]':'pb-[20px]'} min-w-[400px] flex flex-col text-[14px] relative`" >

        <div 
          v-if="showNav" 
          @click="showNavF()"
          class="bg-[#0909096c] w-full h-[100vh] absolute top-0 left-0 z-10 "></div>

        <!--___Header___-->
        <div class="mb-4 p-3 w-full">
          <Header :showNavF="showNavF" :linkUrl="linkUrl" />
        </div>

        <!--___Routes___-->
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
  import LeftSideNavigation from '../components/LeftSideNavigation/index.vue';
  import Header from '../components/Header/index.vue';  
  import { watchEffect } from 'vue';  

  export default {
    components: {
      Header,
      LeftSideNavigation
    },
    created() {
      watchEffect(() => {
        this.linkUrl = this.$route.path.replace(/\/\d+$/, '');
      });
    },
    mounted() {
      this.eventBusMit.on('show-nav', (val) => {
        this.showNav = val;
      });
    },  
    data() {
        return {
          showNav: false,
          linkUrl: '/'
        }
    },
    methods: {
      showNavF () {
        this.showNav = !this.showNav;
        this.eventBusMit.emit('show-nav', this.showNav);
      }
    }
  }

</script>