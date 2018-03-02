<template>
  <Page>
    <ActionBar title="Home"/>
    <StackLayout class="home">
      {{#store}}
      <Button @tap="$router.push('/counter')" text="Counter"/>
      {{/store}}
      <Button @tap="$router.push('/hello')" text="Hello"/>
    </StackLayout>
  </Page>
</template>
