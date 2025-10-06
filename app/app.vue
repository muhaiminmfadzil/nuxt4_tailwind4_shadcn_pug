<template lang="pug">
.p-4.flex.items-center.justify-center.gap-4.mt-10
  v-button(@click="onClickMe") Click me
  v-button(variant="secondary") Click me
  v-button(variant="destructive") Click me
  v-button(variant="outline") Click me
  v-button(variant="ghost") Click me
  v-button(variant="link") Click me
.p-4.flex.items-center.justify-center.gap-4.mt-10
  v-button(disabled, @click="onClickDisabled") Click me
  v-button(variant="secondary", disabled) Click me
  v-button(variant="destructive", disabled) Click me
  v-button(variant="outline", disabled) Click me
  v-button(variant="ghost", disabled) Click me
  v-button(variant="link", disabled) Click me
</template>

<script setup>
const onClickDisabled = () => {
  console.log('You should not see this message because the button is disabled.')
}
const onClickMe = () => {
  console.log('Button clicked!')
}
</script>
