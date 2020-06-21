<template>
  <section id="app">
    <Contacts/>
    <MapSection/>
    <ContactUsForm/>
  </section>
</template>

<script>
import Contacts from './components/Contacts.vue';
import MapSection from './components/MapSection.vue';
import ContactUsForm from './components/ContactUsForm.vue';

export default {
  components: {
    Contacts, MapSection, ContactUsForm,
  }
}
</script>

<style lang="scss">
  
</style>