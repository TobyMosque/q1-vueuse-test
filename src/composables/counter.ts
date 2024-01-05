import { createInjectionState } from '@vueuse/core'
import { ref, computed } from 'vue'

const [ createCounterState, useCounterStateInner ] = createInjectionState(() => {
  const counter = ref(0)
  const counterDouble = computed(() => counter.value * 2)
  function increase(val: number) {
    counter.value += val
  }

  return {
    counter,
    counterDouble,
    increase
  }
})

function useCounterState() {
  const counterState = useCounterStateInner()
  if (!counterState) {
    throw 'counter state not injected'
  }
  return counterState
}

export { createCounterState, useCounterState }