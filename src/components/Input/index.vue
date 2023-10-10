<template>

  <input 
    :ref="ref"
    :type="textInput" 
    :placeholder="placeholder" 
    :class="class" 
    @click="() => selectedInputFunc(textInput)"
    @keyup="(e) => inputRef(e.target.value)" />

</template>

<script>

  export default {
    props: [ 'textInput', 'placeholder', 'condition', 'class' ],
    data() {
      return {

      }
    },
    methods: {
      selectedInputFunc(inputText) {
        if(this.condition !== 'login') return;

        this.$emit('selected-input', inputText);
      },

      inputRef(val) {
        if(this.condition !== 'login') return;

        const type = this.textInput;
        this.$emit('data-input', { type, val });
      }
    }
  }

</script>