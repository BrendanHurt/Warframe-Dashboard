<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      numOwned: 0,
      dropSource: '',
      dropChance: 0,
      material: [
        {
          name: '',
          amount: 0,
        },
      ],
    }
  },
  methods: {
    addMaterial() {
      this.material.push({
        name: '',
        amount: 0,
      })
    },
    deleteMaterial(counter: number) {
      this.material.splice(counter, 1)
    },
    registerItem() {
      axios
        .post('/api/item', {
          name: this.name,
          numOwned: this.numOwned,
          droupSource: this.dropSource,
          dropChance: this.dropChance,
        })
        .then(async (res) => {
          alert(res.data)
        })
        .catch(() => {
          alert('Something went wrong.')
        })
    },
  },
}
</script>

<template>
  <form @submit.prevent="registerItem">
    <div><input placeholder="Name" type="text" required v-model="name" /></div>
    <br />
    <div><input placeholder="How many you already have" type="number" v-model="numOwned" /></div>
    <br />
    <div><input placeholder="Where it drops from" type="text" v-model="dropSource" /></div>
    <br />
    <div><input placeholder="The drop chance" type="number" v-model="dropChance" /></div>
    <br />

    <button>Cancel</button>
    <button @click="registerItem">Confirm</button>
  </form>
</template>

<style></style>
