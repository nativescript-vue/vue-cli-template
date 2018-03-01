<template>
    <StackLayout>
        <Label :text="message" textWrap="true"/>
        <GridLayout columns="*,*" rows="auto,auto">
          <Button row="0" col="0" @tap="decrement" text="-"/>
          <Button row="0" col="1" @tap="increment" text="+"/>
        </GridLayout>
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
        padding: 10;
        margin: 10;
        font-size: 20;
        width: 50%;
    }
</style>
