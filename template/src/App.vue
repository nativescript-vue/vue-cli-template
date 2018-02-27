<template>
    <Page>
        <ActionBar title="NativeScript-Vue 🎉" />

        <StackLayout>
            <Label :text="msg" />
            {{#store}}<Counter />{{else}}<HelloWorld />{{/store}}
        </StackLayout>
    </Page>
</template>

<script>
  {{#store}}
  import Counter from './components/Counter';
  {{else}}
  import HelloWorld from './components/HelloWorld';
  {{/store}}

  export default {
    data() {
      return {
        msg: 'Welcome to NativeScript-Vue.',
      }
    },
    components: {
      {{#store}}
      Counter
      {{else}}
      HelloWorld
      {{/store}}
    }
  }
</script>

<style>
    Label {
        font-size: 24px;
        text-align: center;
    }
</style>
