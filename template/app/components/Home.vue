<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      {{#store}}
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      {{/store}}
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
    </StackLayout>

  </Page>
</template>
