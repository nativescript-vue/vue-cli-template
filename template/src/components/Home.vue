<template>
  <StackLayout class="home">
    <Label text="Welcome home!" class="page-title"/>
    {{#store}}
    <Button @tap="$router.push('/counter')" text="Counter"/>
    {{/store}}
    <Button @tap="$router.push('/hello')" text="Hello"/>
  </StackLayout>
</template>
