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
        <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selectorName }}-x-{{ key }}</span>
            <span class="ml-3 text-gray-600"> > * + *</span>
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
              --{{ selectorName }}-x-reverse:
              <span class="text-gray-50">0</span>;
            </p>
            <p>
              {{ propertyRight }}:
              <span class="text-gray-50"
                >calc({{ value }} * var(--{{ selectorName }}-x-reverse))</span
              >;
            </p>
            <p>
              {{ propertyLeft }}:
              <span class="text-gray-50">
                calc({{ value }} * calc(1 - var(--{{
                  selectorName
                }}-x-reverse)))</span
              >;
            </p>
          </td>
        </tr>
        <tr class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selectorName }}-x-reverse</span>
            <span class="ml-3 text-gray-600"> > * + *</span>
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
              --{{ selectorName }}-x-reverse:
              <span class="text-gray-50">1</span>;
            </p>
          </td>
        </tr>
        <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selectorName }}-y-{{ key }}</span>
            <span class="ml-3 text-gray-600"> > * + *</span>
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
              --{{ selectorName }}-y-reverse:
              <span class="text-gray-50">0</span>;
            </p>
            <p>
              {{ propertyTop }}:
              <span class="text-gray-50"
                >calc({{ value }} * calc(1 - var(--{{
                  selectorName
                }}-y-reverse)))</span
              >;
            </p>
            <p>
              {{ propertyBottom }}:
              <span class="text-gray-50"
                >calc({{ value }} * var(--{{ selectorName }}-y-reverse))</span
              >;
            </p>
          </td>
        </tr>
        <tr class="align-top">
          <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
            <span>{{ selectorName }}-y-reverse</span>
            <span class="ml-3 text-gray-600"> > * + *</span>
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
              --{{ selectorName }}-y-reverse:
              <span class="text-gray-50">1</span>;
            </p>
          </td>
        </tr>
      </tbody>
      <template v-if="negative">
        <tbody>
          <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
            <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
              <span> -{{ selectorName }}-x-{{ key }}</span>
              <span class="ml-3 text-gray-600"> > * + *</span>
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
                --{{ selectorName }}-x-reverse:
                <span class="text-gray-50">0</span>;
              </p>
              <p>
                {{ propertyRight }}:
                <span class="text-gray-50"
                  >calc(-{{ value }} * var(--{{
                    selectorName
                  }}-x-reverse))</span
                >;
              </p>
              <p>
                {{ propertyLeft }}:
                <span class="text-gray-50"
                  >calc(-{{ value }} * calc(1 - var(--{{
                    selectorName
                  }}-x-reverse)))</span
                >;
              </p>
            </td>
          </tr>
          <tr v-for="(value, key) in setTheme" :key="key.id" class="align-top">
            <td class="text-violet-400 py-8 px-12 whitespace-nowrap">
              <span> -{{ selectorName }}-y-{{ key }}</span>
              <span class="ml-3 text-gray-600"> > * + *</span>
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
                --{{ selectorName }}-y-reverse:
                <span class="text-gray-50">0</span>;
              </p>
              <p>
                {{ propertyTop }}:
                <span class="text-gray-50"
                  >calc(-{{ value }} * calc(1 - var(--{{
                    selectorName
                  }}-y-reverse)))</span
                >;
              </p>
              <p>
                {{ propertyBottom }}:
                <span class="text-gray-50"
                  >calc(-{{ value }} * var(--{{
                    selectorName
                  }}-y-reverse))</span
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
    selectorName: {
      type: String,
      required: true
    },
    propertyLeft: {
      type: String,
      required: true
    },
    propertyRight: {
      type: String,
      required: true
    },
    propertyTop: {
      type: String,
      required: true
    },
    propertyBottom: {
      type: String,
      required: true
    },
    customRules: {
      type: Object,
      default: null
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
        } else if (value === 'spacing') {
          return (this.setTheme = getThemeDocs.spacing)
        }
      }
    }
  }
}
</script>
