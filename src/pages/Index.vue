<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section>Parent Component</q-card-section>
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
    <counter-comp></counter-comp>
  </q-page>
</template>

<script lang="ts">
import { createCounterState } from 'src/composables/counter';
import CounterComp from 'components/Counter.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { CounterComp },
  setup() {
    return createCounterState()
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
