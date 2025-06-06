<script setup lang="ts">
//import { ref } from 'vue'
import { PropType } from 'vue'

interface material {
  name: string
  amount: number
}

//const props = defineProps({
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  numOwned: {
    type: Number,
    required: true,
  },
  dropChance: {
    type: Number,
    required: true,
  },
  altCost: {
    type: Object as PropType<material>,
    required: false,
  },
  dropSource: {
    type: String,
    required: true,
  },
  materials: {
    type: Array as PropType<Array<material>>,
    required: false,
    default: undefined,
  },
  buildTime: {
    type: Number,
    required: true,
  },
  propStartBuild: {
    type: Date,
    required: false,
  },

  /*computed: {
    timeLeft(): Date {
      return this.startBuild ? this.startBuild + Date.now() - this.buildTime : null
    },
  },
  mounted() {
    this.timeLeft
  },*/
})
/*methods: {
  function formatDate(date: Date): string {
    const copy = new Date(date);
    return Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(copy);
  }
}*/
</script>

<template>
  <body>
    <div class="card">
      <div class="nameBar">
        <div class="frameName">{{ props.name }}:</div>
        <div class="numOwned">{{ props.numOwned }}</div>
      </div>
      <div class="matGrid">
        <div v-for="mat of materials">{{ mat.name }}: {{ mat.amount }}</div>
      </div>
      <div class="footer">
        <div class="progBar">{{ startBuild?.valueOf() }}</div>
        <div v-if="!startBuild">
          <button>Build</button>
        </div>
        <div v-else>
          <button>Cancel</button>
          <button>Finish</button>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.nameBar {
  display: flex;
}
/*add support for old grid style later*/
.matGrid {
  display: grid;
}
.footer {
  display: flex;
}
</style>
