<script lang="ts">
export default {
  data() {
    return {
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
  },
}
</script>

<template>
  <form method="post">
    <label>Name</label><input type="text" required />
    <br />
    <label>How many you own</label><input type="number" />
    <br />
    <label>Drop Chance</label><input type="number" />
    <br />
    <label>Drop Source</label><input type="text" />
    <br />
    <fieldset>
      <legend>Materials</legend>
      <label for="name">Name <input /></label>
      <label for="amount">Amount <input type="number" /></label>
      <br />
      <div class="matCard" v-for="(name, amount) in material" v-bind:key="counter">
        <span @click="deleteMaterial(counter)">x </span>
        <label for="name">Name </label>
        <input type="text" v-model="material.name" required />
        <label for="amount"> Amount </label>
        <input type="number" v-model="material.amount" required />
      </div>
      <button @click="addMaterial">Add another material:</button>
    </fieldset>

    <button>Cancel</button>
    <submit>Confirm</submit>
  </form>
</template>

<style></style>
