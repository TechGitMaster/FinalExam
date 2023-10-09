<template>


    <div>

        <!--____Search____-->
        <div class="px-3">
            <div class='p-5 rounded-[15px] bg-[#F8F9FA] flex justify-between items-center' style="border:1px solid #DBDEE2">
                <img :src="pngs[0]" alt="ico" class="h-[20px] mr-3" />

                <input type="text" placeholder="try our new Beef Bibimbowl" class="w-full text-[15px] outline-none bg-[#F8F9FA]" />

                <img :src="pngs[1]" alt="ico" class="h-[20px] ml-3" />
            </div>
        </div>


        <div>
            <!--____Categories_____-->
            <div class="flex overflow-x-scroll scrollbar-none mt-4 mb-2 px-3">
                <CardCategories :conditionCategories="false" />
            </div>


            <!--____Foods____-->
            <div class="px-3">
                <CardFoods />
            </div>
        </div>

    </div>


</template>

<script>
    import CardFoods from '../../components/CardFoods/index.vue';
    import CardCategories from '../../components/CardCategories/index.vue';
    import { Search, Filter, Star, Wifi } from '../../utilities/png.js';

    export default {
        components: {
            CardFoods,
            CardCategories
        },
        data(){
            return {
                pngs: [Search, Filter, Star, Wifi],
                categSelect: 0
            }
        },
    }
</script>