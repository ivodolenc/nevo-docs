<template>
  <div
    class="
      search-container
      z-90
      fixed
      top-0
      left-0
      w-screen
      h-screen
      bg-dark-900 bg-opacity-70
      backdrop-filter backdrop-blur-3
    "
    @click.self="closeSearchWindow"
    @keyup.esc="closeSearchWindow"
  >
    <div
      class="
        z-100
        flex flex-col
        max-w-screen-md
        mx-auto
        max-h-full
        bg-dark-500
        rounded-6
        px-10
        xl:px-13
      "
    >
      <div class="flex items-center">
        <form
          role="search"
          class="flex text-gray-300 text-3 w-full items-center"
        >
          <label for="search-input" class="flex-none mr-10">
            <IconSearch />
          </label>
          <input
            id="search"
            ref="searchInput"
            v-model="searchQuery"
            type="search"
            aria-label="Search"
            maxlength="64"
            autocomplete="off"
            placeholder="Search docs"
            class="
              bg-transparent
              w-full
              text-gray-300
              placeholder-gray-400
              outline-none
              weight-500
              tracking-2
              leading-5
              py-11
              pr-11
              xl:py-12
            "
            @input="resetHighlightSearchResult"
            @keydown.up.prevent="highlightPreviousSearchResult"
            @keydown.down.prevent="highlightNextSearchResult"
            @keydown.enter.prevent="goToPage"
          />
        </form>
        <ButtonCloseWindow @click.native="closeSearchWindow" />
      </div>
      <div class="h-px bg-dark-300"></div>
      <div class="search-results text-gray-400 overflow-auto scrollbar-hidden">
        <template v-if="pages.length">
          <h5 class="weight-600 tracking-2 text-2 my-8">Documentation</h5>
          <ul ref="scrollIntoResult" class="pb-16">
            <li v-for="(page, index) of pages" :key="page.slug">
              <NuxtLink
                :to="{ name: 'docs-slug', params: { slug: page.slug } }"
                class="
                  flex
                  items-center
                  justify-between
                  weight-500
                  text-gray-400
                  tracking-2
                  my-3
                  py-9
                  px-10
                  bg-dark-400
                  rounded-4
                "
                :class="{ active: index === highlightSearchResult }"
                @click.native="closeSearchWindow"
                @mouseover.native="highlightSearchResult = index"
              >
                <span class="flex-none mr-9 sm:mr-12">
                  <IconPage class="h-10 opacity-50" />
                </span>
                <span class="w-full truncate">{{ page.title }}</span>
                <span class="flex-none ml-9 sm:ml-12">
                  <IconEnter class="h-9 opacity-30" />
                </span>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <div v-else>
          <h5
            v-if="searchQuery.length > 0 && !pages.lenght"
            class="weight-400 text-gray-500 tracking-2 text-4 my-16"
          >
            <span>No results for</span>
            <span class="weight-500 text-gray-400">'{{ searchQuery }}'</span>
          </h5>
          <h5 v-else class="weight-400 text-gray-500 tracking-2 text-4 my-16">
            <span>No search results</span>
          </h5>
        </div>
      </div>
      <div class="h-px bg-dark-300 mb-18"></div>
    </div>
  </div>
</template>

<script>
import ButtonCloseWindow from './ButtonCloseWindow'
import IconSearch from './icons/IconSearch'
import IconPage from './icons/IconPage'
import IconEnter from './icons/IconEnter'

export default {
  components: {
    ButtonCloseWindow,
    IconSearch,
    IconPage,
    IconEnter
  },

  data() {
    return {
      highlightSearchResult: 0,
      searchQuery: '',
      pages: []
    }
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.pages = []
        return
      }

      this.pages = await this.$content('docs')
        .only(['title', 'slug'])
        .sortBy(['title', 'slug'], 'asc')
        .limit(5)
        .search(searchQuery)
        .fetch()
    }
  },

  mounted() {
    this.focusSearchInput()
    this.disableDocumentOverflow()
  },

  beforeDestroy() {
    this.enableDocumentOverflow()
  },

  methods: {
    closeSearchWindow() {
      this.$emit('closeSearch', true)
    },

    focusSearchInput() {
      this.$refs.searchInput.focus()
    },

    resetHighlightSearchResult() {
      this.highlightSearchResult = 0
    },

    highlightPreviousSearchResult() {
      if (this.highlightSearchResult > 0) {
        this.highlightSearchResult -= 1

        this.scrollIntoSearchResult()
      }
    },

    highlightNextSearchResult() {
      if (this.highlightSearchResult < this.pages.length - 1) {
        this.highlightSearchResult += 1

        this.scrollIntoSearchResult()
      }
    },

    scrollIntoSearchResult() {
      this.$refs.scrollIntoResult.children[
        this.highlightSearchResult
      ].scrollIntoView({
        block: 'nearest'
      })
    },

    goToPage() {
      if (this.pages[this.highlightSearchResult]) {
        this.$nuxt.$router.push({
          name: 'docs-slug',
          params: { slug: this.pages[this.highlightSearchResult].slug }
        })

        this.closeSearchWindow()
      }
    },

    disableDocumentOverflow() {
      document.documentElement.classList.add('overflow-hidden')
    },

    enableDocumentOverflow() {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  pointer-events: none;
  opacity: 0;
}

.search-container {
  padding: theme('spacing', '11');

  @include media($from: 'md') {
    padding: 10vh;
  }

  @include media($from: 'md') {
    padding: 13vh;
  }
}

.active {
  background-color: rgba(theme('colors', 'sky', '700'), 0.4);
  color: theme('colors', 'sky', '400');
}
</style>
