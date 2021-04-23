<template>
  <li>
    <label>
      <input
        v-if="what!=='color'"
        type="checkbox"
        class="checkbox"
        :checked="checkChecked"
        @change="changeQuery(name,what,$event)"
      >
      <input
        v-else
        :checked="checkChecked"
        type="checkbox"
        class="checkbox checkbox__color"
        :style="{'--backColor': item.value}"
        @change="changeQuery(name,what,$event)"
      >
      <span class="span">
        {{ name.charAt(0).toUpperCase()+name.slice(1) }}
      </span>
    </label>
    <slot />
  </li>
</template>

<script>
export default {
  name: 'ListFilter',
  props: ['what', 'name', 'item'],
  data () {
    return {
      checked: false
    }
  },
  computed: {
    checkChecked () {
      if (!this.$route.query[this.what]) {
        return false
      }
      return this.$route.query[this.what].includes(this.name)
    }
  },
  watch: {
    $route () {

    }
  },
  methods: {
    changeQuery (value, what, target) {
      if (!target.target.checked) {
        const result = this.$route.query[what].filter(el => el !== value)

        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            [what]: result
          }
        })

        if (!result.length) {
          const query = Object.assign({}, this.$route.query)
          delete query[what]
          this.$router.replace({ query })
        }

        return
      }
      // eslint-disable-next-line no-prototype-builtins
      if (this.$route.query.hasOwnProperty(what)) {
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            [what]: Array.isArray(this.$route.query[what]) ? this.$route.query[what].concat(value) : [this.$route.query[what]].concat(value)
          }
        })
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          [what]: [value]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .checkbox{
    cursor: pointer;
    margin-right: 4px;
  }
  input[type='checkbox'].checkbox__color:after {
    content: " ";
    height: 13px;
    width: 13px;
    left: 0;
    top: 0;
    background: var(--backColor);
    display: inline-block;
    visibility: visible;
    border: 1px solid $gray;
    border-radius: 2px;

  }

  [type='checkbox'].checkbox__color:checked {
    outline: 2px solid $main;
  }

</style>
