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
      <tbody v-for="(properties, selector) in rules" :key="selector.id">
        <tr v-for="(value, key) in themeColors" :key="key.id" class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selector }}-{{ key }}</span>
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
            <p v-if="value !== 'transparent' && value !== 'currentColor'">
              <span>{{ customProperty }}: </span>
              <span class="text-gray-50">1</span><span>;</span>
            </p>
            <span v-else class="hidden"></span>
            <p v-for="property in properties" :key="property">
              <span>{{ property }}: </span>
              <span class="text-gray-50">{{ hex2rgb(value) }}</span
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

  props: {
    customProperty: {
      type: String,
      default: null
    },
    rules: {
      type: Object,
      required: true
    },
    combinator: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      themeColors: getThemeDocs.colors
    }
  },

  methods: {
    hex2rgb(hex) {
      if (hex !== 'transparent' && hex !== 'currentColor') {
        let r = 0
        let g = 0
        let b = 0

        // 3 digits
        if (hex.length === 4) {
          r = '0x' + hex[1] + hex[1]
          g = '0x' + hex[2] + hex[2]
          b = '0x' + hex[3] + hex[3]

          // 6 digits
        } else if (hex.length === 7) {
          r = '0x' + hex[1] + hex[2]
          g = '0x' + hex[3] + hex[4]
          b = '0x' + hex[5] + hex[6]
        }

        return `rgba(${+r}, ${+g}, ${+b}, var(${this.customProperty}))`
      } else {
        return hex
      }
    }
  }
}
</script>
