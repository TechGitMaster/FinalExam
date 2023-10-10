<template>
  <div class="h-[100vh] flex flex-col justify-between py-5 px-2">
    <div>
      <img :src="pngs[0]" class="h-[100px] -ml-[5px]" />
      <p class="font-semibold text-[25px] py-2">Bonjour!</p>
      <p class="text-[#6C757D]">Welcome to all new FastFood mobile app. Kindly login your account. Thank you!</p>

      <!--____Login input_____-->
      <form href="#" class="mt-5">
        <div class="bg-[#F8F9FA] rounded-[16px] py-2 px-3" :style="`border:1px solid ${!selectedInput ? '#6C757D':'#DEE2E6'}`">
          <p class="text-[#6C757D] text-[12px]">Email Address</p>
          <Input 
            textInput="text" 
            placeholder="Enter your email" 
            condition="login"
            class="w-full bg-[#F8F9FA] outline-none mt-1 text-[16px]" 
            @selected-input="selectedInputFunc"
            @data-input="inputRef" />
        </div>
        <div class="bg-[#F8F9FA] rounded-[16px] py-2 px-3 mt-2" :style="`border:1px solid ${selectedInput ? '#6C757D':'#DEE2E6'}`">
          <p class="text-[#6C757D] text-[12px]">Password</p>
          <div style="display:grid; grid-template-columns: 1fr auto">
            <div class="pr-2">
              <Input 
                textInput="password" 
                placeholder="Enter your password" 
                condition="login"
                class="w-full bg-[#F8F9FA] outline-none mt-1 text-[16px]" 
                @selected-input="selectedInputFunc"
                @data-input="inputRef" />
            </div>
            <div class="flex items-center cursor-pointer">
              <p class="text-rose font-semibold">Forgot?</p>
            </div>
          </div>
        </div>


        <button @click.prevent="login"
          class="w-full rounded-[16px] bg-rose text-[white] flex justify-center items-center py-4 mt-10">Login</button>
      </form>

      <!--____Login as Guest_____-->
      <p class="text-rose text-center mt-6 font-semibold cursor-pointer">Login as Guest</p>
    </div>
    <div>
      <p class="text-center text-[#444444]">Dont have an account yet? <span class="text-rose font-semibold cursor-pointer">Create</span></p>
    </div>
  </div>
</template>

<script>
  import { Logo } from '@/utilities/png';
  import Input from '../../components/Input';
  import { loginCall } from '../../utilities/apiCall';

  export default {
    components: {
      Input
    },
    data() {
      return {
        selectedInput: false,
        pngs: [ Logo ],
        email: 'user@praxxys.ph',
        password: 'password'
      }
    },
    methods: {
      selectedInputFunc(inputName) {
        this.selectedInput = inputName === 'text' ? false:true;
      },
      async login() {
        const data = await loginCall(this.email, this.password);

        if(data.error) return alert('Fill the correct email and password');

        localStorage.setItem('token', data.access_token);
        this.$router.go();
      },
      inputRef({ type, val }) {
        if(type === 'text'){
          this.email = val;
        }else{
          this.password = val;
        }
      }
    }
  }

</script>