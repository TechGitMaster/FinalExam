<template>


    <div>

        <!--____Search____-->
        <div class="px-3">
            <div class='p-5 rounded-[15px] bg-[#F8F9FA] flex justify-between items-center' style="border:1px solid #DBDEE2">
                <img :src="pngs[0]" alt="ico" class="h-[20px] mr-3" />

                <Input 
                    textInput="text" 
                    placeholder="try our new Beef Bibimbowl" 
                    condition="product-page"
                    class="w-full text-[15px] outline-none bg-[#F8F9FA]" />

                <img :src="pngs[1]" alt="ico" class="h-[20px] ml-3" />
            </div>
        </div>

        <div>
            <!--____Categories_____-->
            <div class="flex overflow-x-scroll scrollbar-none mt-4 mb-2 px-3">
                <CardCategories :conditionCategories="false" @done-loading="doneLoading" />
            </div>


            <!--____Foods____-->
            <div class="px-3">
                <CardFoods @done-loading="doneLoading" />
            </div>
        </div>
    </div>

    <div v-if="count < 2" class="flex justify-center mt-3">
        <img src="../../assets/GIF/loading.gif" class="h-[50px] aspect-square" />
    </div>


</template>

<script>
    import CardFoods from '../../components/Card/CardFoods.vue';
    import CardCategories from '../../components/Card/CardCategories.vue';
    import Input from '../../components/Input';
    import { Search, Filter, Star, Wifi } from '@/utilities/png.js';

    export default {
        components: {
            CardFoods,
            CardCategories,
            Input
        },
        data(){
            return {
                pngs: [Search, Filter, Star, Wifi],
                count: 0
            }
        },
        methods: {
            doneLoading(val) {
                this.count += 1;
            }
        }
    }
</script>