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
        <template v-if="customRules">
          <tr
            v-for="(properties, selector) in customRules"
            :key="selector.id"
            class="align-top"
          >
            <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
              <span>
                {{ selector }}
              </span>
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
        </template>
        <tr v-else class="hidden"></tr>
        <template v-for="(properties, selector) in rules">
          <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
            <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
              <span>{{ selector }}-{{ key }}</span>
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
                <span>{{ property }}: </span>
                <span class="text-gray-50">{{ value }}</span
                ><span>;</span>
              </p>
            </td>
          </tr>
        </template>
      </tbody>
      <template v-if="negative">
        <tbody v-for="(properties, selector) in rules" :key="selector.id">
          <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
            <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
              -{{ selector }}-{{ key }}
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
                <span>{{ property }}: </span>
                <span class="text-gray-50"> -{{ value }}</span
                >;
              </p>
            </td>
          </tr>
        </tbody>
      </template>
      <tbody v-else class="hidden"></tbody>
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
    set: {
      type: String,
      required: true
    },
    customRules: {
      type: Object,
      default: null
    },
    rules: {
      type: Object,
      required: true
    },
    negative: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      setTheme: null
    }
  },

  watch: {
    set: {
      immediate: true,
      handler(value) {
        if (value === 'border') {
          return (this.setTheme = getThemeDocs.border)
        } else if (value === 'breakpoints') {
          return (this.setTheme = getThemeDocs.breakpoints)
        } else if (value === 'ease') {
          return (this.setTheme = getThemeDocs.ease)
        } else if (value === 'family') {
          return (this.setTheme = getThemeDocs.family)
        } else if (value === 'leading') {
          return (this.setTheme = getThemeDocs.leading)
        } else if (value === 'rounded') {
          return (this.setTheme = getThemeDocs.rounded)
        } else if (value === 'spacing') {
          return (this.setTheme = getThemeDocs.spacing)
        } else if (value === 'text') {
          return (this.setTheme = getThemeDocs.text)
        } else if (value === 'weight') {
          return (this.setTheme = getThemeDocs.weight)
        }
      }
    }
  }
}
</script>
