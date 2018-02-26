<template>
    <Page>
        <ActionBar title="NativeScript-Vue 🎉" />

        <StackLayout>
            <Label :text="msg" />
            <HelloWorld />
        </StackLayout>
    </Page>
</template>

<script>
    import HelloWorld from './components/HelloWorld';

    export default {
      data() {
        return {
          msg: 'Welcome to NativeScript-Vue.',
        }
      },

      components: {
        HelloWorld
      }
    }
</script>

<style>
    Label {
        font-size: 24px;
        text-align: center;
    }
</style>
