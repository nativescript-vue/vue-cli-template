<template>
    <StackLayout>
        <Label :text="message" textWrap="true"/>
        <WrapLayout>
            <Button @tap="decrement" text="-"/>
            <Button @tap="increment" text="+"/>
        </WrapLayout>
        <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return `Counter: ${this.$store.state.counter.count}`
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>

<style scoped>
    Button {
        background-color: #42b883;
        width: 50%;
    }
</style>