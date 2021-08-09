<template>
  <TableWrapper>
    <table class="w-full text-left font-mono weight-400 tracking-2">
      <thead
        class="font-sans uppercase text-2 weight-600 text-gray-50 tracking-3"
      >
        <tr>
          <th class="pt-10 pb-8 px-12">Class</th>
          <th class="pt-10 pb-8 px-12">Breakpoints</th>
          <th class="pt-10 pb-8 px-12">Properties</th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>container</span>
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
            <span class="text-gray-50">none</span>
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
            <p>
              <span>width: </span>
              <span class="text-gray-50">100%</span><span>;</span>
            </p>
          </td>
        </tr>
        <tr
          v-for="(value, name) in breakpoints"
          :key="name.id"
          class="align-top"
        >
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap"></td>
          <td
            class="
              text-sky-400
              py-8
              px-12
              whitespace-nowrap
              lg:whitespace-normal
            "
          >
            {{ name }} (<span class="text-gray-50">{{ value }}</span
            >)
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
            <p>
              <span>max-width: </span>
              <span class="text-gray-50">{{ value }}</span
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
import getThemeDocs from '~/utils/getThemeDocs'

export default {
  components: {
    TableWrapper
  },

  data() {
    return {
      breakpoints: getThemeDocs.breakpoints
    }
  }
}
</script>
