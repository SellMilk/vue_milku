<template>
    <router-link :to="id" ><img :src="img"> {{ message }}<span>></span></router-link>
</template>

<script>
export default {
  props: ['id','img', 'message'],
}
</script>

<style>
</style>
