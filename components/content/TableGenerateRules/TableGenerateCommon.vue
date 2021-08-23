<template>
  <TableWrapper>
    <table class="w-full text-left font-mono weight-400 tracking-2">
      <thead
        class="font-sans uppercase text-2 weight-600 text-gray-50 tracking-3"
      >
        <tr>
          <th class="pt-10 pb-8 px-12">Class</th>
          <th class="pt-10 pb-8 px-12">Properties</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(properties, selector) in rules"
          :key="selector.id"
          class="align-top"
        >
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selector }}</span>
            <span v-if="combinator" class="ml-3 text-gray-600">{{
              combinator
            }}</span>
            <span v-else class="hidden"></span>
          </td>
          <td
            class="
              text-sky-400
              py-8
              px-12
              whitespace-nowrap
              lg:whitespace-normal
            "
          >
            <p v-for="property in properties" :key="property">
              <span>{{ property.split(/:|;/)[0] }}: </span>
              <span class="text-gray-50">{{ property.split(/:|;/)[1] }}</span
              ><span>;</span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </TableWrapper>
</template>

<script>
import TableWrapper from './TableWrapper'

export default {
  components: {
    TableWrapper
  },

  props: {
    rules: {
      type: Object,
      required: true
    },
    combinator: {
      type: String,
      default: null
    }
  }
}
</script>
