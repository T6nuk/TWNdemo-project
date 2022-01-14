<template>
  <div>
    <div v-for="image in data.images" :key="image" class="page-content">
      <h2 >{{ data.title }}</h2>
      <p class="intro">{{ removeHTML(data.intro) }}</p>
      <div>
        <img :src="image.medium" />
      </div>
      <p>{{ formatBodyText(removeHTML(data.body)) }}</p>
      <p>{{ formatBodyText(removeHTML(data.body)) }}</p>
      <p>{{ formatBodyText(removeHTML(data.body)) }}</p>

      <tags>
        <p class="tags">
          <span
            ><li>{{ data.tags[0] }}</li></span
          >
          <span
            ><li>{{ data.tags[1] }}</li></span
          >
          <span
            ><li>{{ data.tags[2] }}</li></span
          >
        </p>
      </tags>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    msg: String,
  },
  data() {
    return {
      data: [],
      contacts: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("http://proovitoo.twn.ee/api/article.json");
      this.data = await res.json();
    },
    removeHTML(introContent) {
      const noHTML = introContent.replace(/<\/?[^>]+>/gi, "");
      return noHTML;
    },
    formatBodyText(bodyText) {
      const oneParagraph = bodyText.slice(0, bodyText.length / 3);
      return oneParagraph;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
  position: relative;
  flex-grow: 1;
  padding: 0 30px;
  width: 780px;
  margin: 0 auto;

}

h2 {
  margin-top: 0;
  font-weight: 700;
  font-size: 48px;
  color: #14cc76;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 44px;
}
.intro{
  font-weight: bold;
  margin: 40px 0;
}

span {
  background: #ff57a2;
  border-radius: 99px;
  margin-right: 10px;
  padding: 5px 10px;
}
li {
  list-style-type: none;
  float: left;
  display: contents;
}
img{
  width: 100%;
  height: auto;
}
p{
  font-size:24px;
  text-align: initial;
}
.tags{
  width: 100%;
  color: #fff;
  font-size: 1rem;
}
</style>
