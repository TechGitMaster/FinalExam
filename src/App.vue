<template>
    <!--<router-link to="/">Home</router-link>
    <router-link :to="{ name: 'Index' }" >Index</router-link>
    <router-view />-->
      
    
  <div class="flex text-[14px]">
    <div v-if="showNav && showHeaderComponent" class="w-[80%]">
      <LeftSideNavigation />
    </div>
    
    <div :class="`${showNav ? 'w-[20%]':'w-full'} overflow-hidden`">
        <Main :showNavF="showNavF" :showNav="showNav" :showHeaderComponent="showHeaderComponent" :linkUrl="linkUrl" />
    </div>

  </div>


</template>

<script>
  import { watchEffect } from 'vue';
  import LeftSideNavigation from './components/LeftSideNavigation/index.vue';
  import Main from './Pages/main.vue';

  export default {
    components: {
      Main,
      LeftSideNavigation
    },
    created() {
      watchEffect(() => {
        this.showHeaderComponent = this.$route.path !== '/' && this.$route.path !== '/login';
        this.linkUrl = this.$route.path;

        if(!this.showHeaderComponent) this.showNav = false;
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
          linkUrl: '/',
          showHeaderComponent: false,
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