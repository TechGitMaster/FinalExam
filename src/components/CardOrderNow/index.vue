<template>

  
  <button 
    v-if="!showNav" 
    @click="orderNow"
    class="fixed bottom-[2%] right-[3%] bg-[#D20F1B] text-white rounded-[15px] py-4 z-10 text-[15px] w-[40%] shadow-lg">Order Now!</button>


</template>

<script>

  export default {
    props: [ 'showNav' ],
    data() {
      return {
        
      }
    },
    methods: {
      orderNow() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
          this.$router.push('/productPage')
        }, (500));
      }
    }
  }

</script>