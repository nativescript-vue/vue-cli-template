<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">
      {{#router}}
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
      {{/router}}
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="This is a hello world component, tap the button if you dare"/>

      <Button class="btn btn-primary" @tap="surprise = !surprise" :text="title"/>
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png"/>

    </StackLayout>

  </Page>
</template>

<script>
  export default {
    data () {
      return {
        surprise: false,
        title: "Tap me!"
      };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
