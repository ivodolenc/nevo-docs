<template>
  <div class="flex items-center text-gray-500">
    <a
      href="https://www.npmjs.com/package/nevo"
      rel="noopener noreferrer"
      target="_blank"
      class="hidden mr-8 transition-colors hover:text-gray-50 sm:inline-block"
    >
      <IconNpm />
    </a>
    <a
      href="https://github.com/ivodolenc/nevo"
      rel="noopener noreferrer"
      target="_blank"
      class="transition-colors hover:text-gray-50"
    >
      <IconGithub />
    </a>
  </div>
</template>

<script>
import IconGithub from './IconGithub'
import IconNpm from './IconNpm'

export default {
  components: {
    IconGithub,
    IconNpm
  }
}
</script>
