<template>
    <!--нав бар-->
    <div :class="'nav_bar '+theme">
        <div class="marger_nav nav_header">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <div class="nav_header" v-b-modal.modal-4 @click="(currentList = {}) && (modalList = !modalList)">Новый лист</div>
        <div class="nav_header" v-b-modal.modalBackground>Фон</div>
        <!--мой выпадающий список-->
        <div class="nav_header nav_label" @click="toggleThemeMenuOpened()">
              Тема
            <div>
              <i class="fa-solid fa-chevron-down" v-if="!getThemeMenuOpened()"></i>
              <i class="fa-solid fa-chevron-up" v-else></i>
            
            <div v-if="getThemeMenuOpened()" class="label_drop">
              <div class="label_item" :class="theme" @click="setTheme(0)">
                <i class="fa-solid fa-cloud-moon"></i>
              </div>
              <div class="label_item" :class="theme" @click="setTheme(1)">
                <i class="fa-solid fa-cloud-sun"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
        }
    },
    props: {
        theme: String,
    },
    methods: {
        getThemeMenuOpened: function() {
            return this.$parent.getThemeMenuOpened();
        },
        toggleThemeMenuOpened: function() {
            this.$parent.toggleThemeMenuOpened()
        },
        setTheme: function(index) {
            this.$parent.setTheme(index);
        }
    }

}
</script>

<style scoped>
.nav_bar{
  top: 0;
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}
.marger_nav{
  margin-left: 3%;
}
.nav_header{
  padding-left: 1%;
  cursor: pointer;
}
.label_drop{
  position: fixed;
  z-index: 110;
}
.label_item {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_label{
  display: flex;
  cursor: pointer;
}
</style>