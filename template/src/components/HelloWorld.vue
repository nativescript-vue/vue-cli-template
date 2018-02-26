<template>
    <StackLayout class="HelloWorld">
        <Label text="This is a hello world component, tap the button if you dare!" textWrap="true"/>
        <Button @tap="surprise = !surprise" text="Tap me!"/>

        <Image v-if="surprise" src="https://art.nativescript-vue.org/NativeScript-Vue.png"/>
    </StackLayout>
</template>

<script>
  export default {
    data() {
      return {
        surprise: false,
      }
    },
  }
</script>

<style scoped>
    .HelloWorld {
        margin: 20;
    }

    Label {
        color: red;
    }

    Button {
        background-color: #42b883;
        color: #35495e;
        padding: 20;
        font-size: 20;
        margin: 20 0;
    }
</style>