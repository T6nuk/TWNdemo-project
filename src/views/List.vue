<template>
  <div id="listTable">
    <h2 id="header">NIMEKIRI</h2>
    <table v-if="data">
      <thead>
        <tr>
          <th>EESNIMI</th>
          <th>PEREKONNANIMI</th>
          <th>SUGU</th>
          <th>SÜNNIKUUPÄEV</th>
          <th>TELEFON</th>
        </tr>
      </thead>
      <tbody id="tablebody">
        <template v-for="contact in visibleList" :key="contact.id">
          <tr id="tr" class="clickable-row" @click="toggleActive(contact.id)">
            <td>
              {{ contact.firstname }}
            </td>

            <td>
              {{ contact.surname }}
            </td>
            <td>
              {{ formatSex(contact.sex) }}
            </td>
            <td>
              {{ ninToDateofBirth(contact.personal_code) }}
            </td>
            <td>
              {{ contact.phone }}
            </td>
          </tr>
          <tr v-if="activeClass === contact.id">
            <td colspan="5">
              <div class="item-info">
                <div class="image-wrapper">
                  <div
                    class="image"
                    :style="{
                      'background-image':
                        'url(' + contact.images[0].small + ')',
                    }"
                  ></div>
                </div>
                <div style="padding: 10px">
                  <div class="content">
                    {{ removeHTML(contact.intro) }}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <Pagination v-if="data" :itemCount="data.stats.results" @pageSelect="pageChanged"/>
    
  </div>

</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: "List",
  props: {
    msg: String,
  },
  components: {
   Pagination
  },
  data() {
    return {
      data: null,
      visibleList: null,
      activeClass: null,
      visibleData: [''],
      value1: false,
      currentPage: 1,
      perPage: 10,

    };
  },

  methods: {
    async getData() {
      const res = await fetch("http://proovitoo.twn.ee/api/list.json");
      this.data = await res.json();
      this.visibleList = this.data.list.slice(0, 10)
      this.fillArray(this.data.list);
      
    },
    pageChanged(page) {
        this.visibleList = this.visibleData[page];
    },
    fillArray(pageData){
      for(let i = 0; i<10; i++){
          this.visibleData.push(pageData.splice(0, 10))
        }    
    },
    listPage(){
      return this.data.list.slice(0, 10)
    },
    formatSex(sex) {
      if (sex == "f") {
        return "Naine";
      }
      return "Mees";
    },
    formatIMG(img) {
      const image = new Image(img);
      return image;
    },
    ninToDateofBirth(nin) {
      let year = nin.toString().substring(1, 3);

      if (
        nin.toString().indexOf("6") == "0" ||
        nin.toString().indexOf("5") == "0"
      ) {
        year = "20" + year;
      } else {
        year = "19" + year;
      }
      let month = nin.toString().substring(3, 5);
      let day = nin.toString().substring(5, 7);

      const dateOfBirth = year + "." + month + "." + day;
      return dateOfBirth;
    },
    removeHTML(introContent) {
      const noHTML = introContent.replace(/<\/?[^>]+>/gi, "");
      return noHTML;
    },
    toggleActive(id) {
      if (this.activeClass == id) {
        this.activeClass = null;
      } else {
        this.activeClass = id;   
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#listTable {
  text-align-last: justify;
  text-align: -webkit-center;
  display: inline-block;
  width: 780px;
}
table {
  width: 100%;
  height: 406px;
   cursor: pointer;
}
.item-info {
  display: flex;
  padding: 10px;
  width: 100%;
}
.item-info .image {
  background: center center/cover no-repeat;
  padding-bottom: 60%;
  position: relative;
}
.image-wrapper {
  height: auto;
  width: 25%;
  flex-shrink: 0;
}
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 150%
}
.clickable-row:hover{
  color: #ff57a2
}
table td,
table th {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

thead tr th {
  color: #ff57a2;
  font-family: Booster;
  font-weight: 900;
}

#header {
  text-align-last: center;
  font-weight: 700;
  font-size: 48px;
  color: #14cc76;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  padding-bottom: 10px;
}
#tablebody {
  box-sizing: border-box;
  display: table-row-group;
  text-indent: initial;
  line-height: 1;
}

button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.rowStyle{
  color: #ff57a2;
}
</style>
