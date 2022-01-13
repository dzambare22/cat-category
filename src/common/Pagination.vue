<template>
  <!-- <div class="row"> -->
  <!-- <div class="col-md-12"> -->
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" @click="onPageBack"> Previous </a>
    </li>

    <template v-for="(i, y) in pages">
      <li
        v-if="y < maxVisible"
        :key="'pagination-page-' + i"
        :class="{ 'page-item': 1, active: value == i }"
      >
        <a class="page-link" @click="onPageClick(i)">{{ i }}</a>
      </li>
    </template>

    <li class="page-item">
      <a class="page-link" @click="onPageForward">Next </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    value: {
      type: Number,
      default: () => 1,
    },
    rowsNumber: {
      type: Number,
      default: () => 0,
    },
    rowsPerPage: {
      type: Number,
      default: () => 0,
    },
    maxVisible: {
      // Max buttons in a row
      type: Number,
      default: () => 5,
    },
  },
  data() {
    return {
      start: 0,
      end: 0,
    };
  },
  computed: {
    pages() {
      function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start); //cretaes shallo copy of array
      }

      const max = this.maxVisible;
      const middle = Math.floor(this.maxVisible / 2); //return largest number
      const pageNum = Math.ceil(this.rowsNumber / this.rowsPerPage); //return round figure

      if (pageNum < max) {
        return range(1, pageNum);
      }

      let start = this.value - middle;
      let end = this.value + middle;

      if (this.value >= pageNum - middle) {
        start = pageNum - max + 1;
        end = pageNum;
      }
      return range(Math.max(1, start), Math.max(end, max));
    },
  },
  methods: {
    onPageClick(page) {
      this.$emit("onPageChange", page);
    },
    onPageBack() {
      if (this.value - 1 >= 1) {
        this.onPageClick(this.value - 1);
      }
    },
    onPageForward() {
      if (this.value + 1 <= Math.ceil(this.rowsNumber / this.rowsPerPage)) {
        this.onPageClick(this.value + 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
ul.pagination {
  li.page-item {
    &.active > a.page-link,
    > a.page-link:hover {
      color: #fff;
      cursor: pointer;
      border-color: #028ce8;
      background-color: #028ce8;
    }
  }
}
</style>
