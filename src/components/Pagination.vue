<template>
  <div class="pagination">
    <button>&lt;</button>
    <span v-for="(pageNo, index) in pageNos" :key="index" >
      <span id="test" class="pagination-button"  @click="pageSelected(pageNo)">{{ pageNo }}</span>
    </span>
    <button>&gt;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: {
    itemCount: Number,
  },
  emits: ["pageSelect"],
  data() {
    return {
      maxVisibleNumbers: 5,
      perPage: 10,
      currentPage: 1,
      isActive: false,
      color: {},
    };
  },
  computed: {
    pageNos() {
      return this.itemCount / this.perPage;
    },
  },
  mounted() {},
  methods: {
    pageSelected(num) {
      this.$emit("pageSelect", num);
      this.currentPage = num;
      console.log(this.isActive);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
  .pagination-button{
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
  }
  .pagination-button:hover{
    box-shadow: inset 0 0 0 2px #666;
    border-radius: 50%;
  }
  .pagination{
    text-align-last: center;
    padding: 20px;
    cursor: pointer;
  }
  .activeColor{
    color: #ff57a2
  }
  .active{
    color: #ff57a2
  }
  

</style>
