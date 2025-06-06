<script setup lang="ts"></script>

<template>
  <form method="post">
    <label>
      Name:
      <input name="submitted-name" />
    </label>
    <label>
      How many you own:
      <input type="number" />
    </label>
    <label>
      Drop Chance:
      <input type="number" />
    </label>
    <label>
      Drop Source:
      <input />
    </label>
    <label>
      Materials:
      <form>
        <label>Name: <input /></label>
        <label>Amount: <input type="number" /></label>
        <button>Add another material:</button>
      </form>
    </label>

    <button>Cancel</button>
    <submit>Confirm</submit>
  </form>
</template>

<style></style>
