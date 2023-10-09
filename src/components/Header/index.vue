<template>

    <div>

        <!--____Home Header____-->
        <div v-if="linkUrl !== '/viewProductPage' && linkUrl !== '/orderSummaryPage'" 
            class="flex items-center justify-between">

            <!--___Burger icon___-->
            <div @click="showNavF()">
                <img :src="pngs[0]" alt="ico" class="h-[30px]" />
            </div>

            <!--___Middle___-->
            <div class="flex items-center">
                <img :src="pngs[1]" alt="ico" class="h-[25px]" />
                <p class="font-semibold mt-[1px] mx-4">0 Points</p>
                <img :src="pngs[2]" alt="ico" class="h-[12px] mt-[2px]" />
            </div>

            <!--___User Icon___-->
            <div>
                <img :src="pngs[3]" alt="user" class="h-[35px]" />
            </div>
        </div>


        <!--____Order Now, Loyalty Points, and others Header_____-->
        <div v-else class="flex items-center justify-between">

            <div class="flex items-center">
                <!--Arrow Back Icon-->
                <div @click="() => $router.go(-1)" class="rounded-[15px] bg-[#DEE2E6] p-3">
                    <img :src="pngs[5]" alt="ico" class="h-[16px]" />
                </div>

                <p class="text-[25px] font-semibold ml-5">{{ linkUrl === '/viewProductPage' ? 'Meat': 'Order Summary' }}</p>
            </div>

            <!--Bag Icon-->
            <div v-if="linkUrl === '/viewProductPage'">
                <img :src="pngs[4]" alt="ico" class="h-[30px]" />
            </div>
        </div>


    </div>

</template>


<script>
    import { Burger, Crown, Arrow, User, Bag, ArrowLeft } from '../../utilities/png.js';

    export default {
        props: ['showNavF', 'linkUrl'],

        data(){
            return {
                pngs: [Burger, Crown, Arrow, User, Bag, ArrowLeft]
            }
        }
    }
</script>