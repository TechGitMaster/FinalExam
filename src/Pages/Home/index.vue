<template>

  <div>
    <!--____Title_____-->
    <div class="px-3 flex">
        <div class="mr-2">
            <img :src="pngs[0]" alt="logo" class="max-h-[80px]" />
        </div>
        
        <div>
            <p class="text-[13px]">Anneoyang, Chou!</p>
            <p class="w-[90%] text-[23px] font-semibold" style="line-height: 120%;">What do you want to eat?</p>
        </div>
    </div>

    <!--____Search_____-->
    <div class="px-3 my-6">
        <div class='p-4 rounded-[15px] bg-[#F8F9FA] flex items-center' style="border:1px solid #DBDEE2">
            <img :src="pngs[1]" alt="ico" class="h-[17px] mr-3" />
            <Input 
                textInput="text" 
                placeholder="try our new Steak Fries Veggie" 
                condition="home-page"
                class="w-full outline-none bg-[#F8F9FA]" />
        </div>
    </div>

    <!--____Special Offers_____-->
    <div class="mb-5">
        <div class="flex justify-between px-3">
            <p class="font-semibold text-[18px]">Special Offers!</p>
            <div class="flex items-center">
                <span class="text-[13px] text-[#CB121E]">View All</span>
                <img :src="pngs[4]" alt="ico" class="ml-2 mt-[2px] h-[9px]" />
            </div>
        </div>
        <div class="pl-3 py-2 flex items-center overflow-y-scroll scrollbar-none">
            <div v-for="(count, index) in '.'.repeat(4).split('')" class="min-w-[320px] mr-2 relative">
                
                <div class="absolute top-0 left-0 h-full flex items-center -ml-[15px]">
                    <div class="rounded-[50%] p-[11px] bg-white"></div>
                </div>
                <img :src="pngs[2]" alt="img"  class="min-w-full h-[130px] rounded-[10px]" />
                <div v-if="index==3" class="absolute top-0 -right-[15px] h-full flex items-center">
                    <div class="rounded-[50%] p-[11px] bg-white"></div>
                </div>
            </div>
        </div>
    </div>

    <!--____Category____-->
    <div class="mb-5">
        <p class="px-3 text-[18px] font-semibold">Category</p>
        <div class="py-2 pl-3 flex overflow-y-scroll scrollbar-none">
            <CardCategories :conditionCategories="true" @done-loading=""/>

            <div v-if="!loading" class="min-w-full flex justify-center mt-3">
                <img src="../../assets/GIF/loading.gif" class="h-[50px] aspect-square" />
            </div>
        </div>
    </div>
    <!--____What's New____-->    
    <div class="px-3 mb-5">
        <p class="text-[18px] font-semibold">What's New</p>
        <div class="my-2 rounded-[17px] overflow-hidden">
            <img :src="pngs[3]" alt="img" class="w-full h-full"/>
        </div>
    </div>

    <!--____Most Popular____-->
    <div class="px-3">
        <p class="text-[18px] font-semibold mb-2">Most Popular</p>
        <div class="grid grid-cols-2 gap-3">
            <div v-for="(data, index) in mP" class="overflow-hidden">
                <div class="bg-[#E9ECEF] rounded-[17px] p-3">
                    <div class="mb-5">
                        <img :src="data.img" alt="img" class="w-full aspect-square object-contain"/>
                    </div>
                    <div class="px-2 pb-3">
                        <p class="text-[14px] font-semibold truncate">{{ data.name }}</p>
                        <p class="text-[13px] mb-3">{{ data.category }}</p>
                        <div class="flex justify-between items-center">
                            <p class="text-[#CC0F1B] font-bold text-[14px]">P {{ data.price }}</p>
                            <img :src="pngs[6]" alt="star" class="-mr-[5px] h-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CardOrderNow :showNav="showNav"/>
  </div>

</template>

<script>
  import { Logo, Search, Img1, Img2, Arrow, SampleImg, Mp1, Mp2, Mp3, Mp4, Star, Wifi } from '../../utilities/png.js';
  import CardOrderNow from '../../components/Card/CardOrderNow.vue';
  import CardCategories from '../../components/Card/CardCategories.vue'
  import Input from '../../components/Input'

  export default {
    props: ['showNav', 'pageSelectedF', 'categoriesList', 'wifiConnectivity'],
    components: {
      CardOrderNow,
      CardCategories,
      Input
    },
    mounted(){
      this.eventBusMit.on('show-nav', (val) => {
        this.showNav = val;
      });
    },
    data(){
      return {
        pngs: [Logo, Search, Img1, Img2, Arrow, SampleImg, Star, Wifi],
        mP: [{
            img: Mp1,
            name: 'Steak Fries Veggies',
            category: 'Meat',
            price: '175'
        }, {
            img: Mp2,
            name: 'Chicken Salad',
            category: 'Chicken',
            price: '172'
        },
        {
            img: Mp3,
            name: 'Sovertes Primaver aasdas asd ',
            category: 'Desset',
            price: '185'
        },
        {
            img: Mp4,
            name: 'Fried Chicken',
            category: 'Chicken',
            price: '175'
        } ],
        showNav: false,
        loading: false
      }
    },
    methods: {
        doneLoading(val) {
            this.loading = true;
        }
    }
  }
</script>