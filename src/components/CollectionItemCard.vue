<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  iconAlt: {
    type: String,
    required: false,
  },
  wikiLink: {
    type: String,
    required: true,
  },
})
</script>
