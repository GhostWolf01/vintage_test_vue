<template>
  <section id="app">
    <Contacts/>
    <Map/>
    <ContactUsForm/>
  </section>
</template>

<script>
import Contacts from './components/Contacts.vue'
import Map from './components/Map.vue'
import ContactUsForm from './components/ContactUsForm.vue'
export default {
  components: {
    Contacts, Map, ContactUsForm
  }
}
</script>

<style lang="scss">
  
</style>