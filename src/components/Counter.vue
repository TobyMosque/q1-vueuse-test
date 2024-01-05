<template>
  <q-card>
    <q-card-section>Child Component</q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-input v-model="counter" label="Counter">
        <template v-slot:prepend>
          <q-btn round dense color="negative" icon="remove" @click="decrement(1)" />
        </template>
        <template v-slot:append>
          <q-btn round dense color="positive" icon="add" @click="increase(1)" />
        </template>
      </q-input>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-list>
        <q-item>double: {{ counterDouble }}</q-item>
        <q-item>triple: {{ counterTriple }}</q-item>
        <q-item>quaduple: {{ counterQuaduple }}</q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useCounterState } from 'src/composables/counter';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentCounter',
  setup() {
    return useCounterState()
  },
  computed: {
    counterTriple() {
      return this.counter * 3
    },
    counterQuaduple() {
      return this.counterDouble * 2
    }
  },
  methods: {
    decrement (val: number) {
      this.increase(val * -1)
    }
  }
});
</script>
  