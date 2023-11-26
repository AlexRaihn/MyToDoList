<template>
  <div>
  <NavBar :theme = "theme[currentThemeIndex]"/>
  <div :style="'background-image: url('+getBackgrounds[backgroundIndex].backgroundUrl+');'" class="back">
      <!--Модалка для выбора заднего фона-->
      <b-modal id="modalBackground" @ok="ChangeBackImg()" @show="ModalBackgroundOnShow()" :class="theme[currentThemeIndex]">
       <div class="modal_cont">
          <div v-for="(mod_background, index) in getBackgrounds" class="background_img">
            <div class="background_cont" :style="'background-image: url('+getBackgrounds[index].backgroundUrl+');'" @click="backgroundIndexTmp = index"></div>
            <p>{{ getBackgrounds[index].name }}</p>
          </div>
        </div>
        <button v-b-modal.modal-2>Добавить</button>  
      </b-modal>

      <!--модалка для добавления нового фона-->
      <b-modal id="modal-2" @ok="AddBackground()" :class="theme[currentThemeIndex]">
        <p>Название фона:</p>
        <input type="text" v-model="newBackground.name">
        <p>Путь к фону:</p>
        <input type="text" v-model="newBackground.backgroundUrl">
      </b-modal>

      <!--модалка для добавления\редактирования нового листа-->
      <b-modal id="modal-4" hide-footer v-model="modalList">
        <template #modal-title v-if="(!currentList.type)||(currentList.type == 0)">
            Добавление нового листа
        </template>
        <template #modal-title v-else>
            Редактирование листа
        </template>
        <input type="text" v-model="currentList.name">
        <div v-if="!errorsList || errorsList.length > 0">
            <p>
              {{ errorsList }}
            </p>
        </div>
        <hr>
        <b-button @click="AddNewList()" v-if="(!currentList.type)||(currentList.type == 0)">Добавить</b-button>
        <b-button @click="EditList()" v-else>Сохранить</b-button>
      </b-modal>
      
      <!--модалка для редактирования\удаления\добавления дел-->
      <b-modal id="modal-3" hide-footer v-model="modalWorkItem">
        <template #modal-title v-if="(!currentWorkItem.type)||(currentWorkItem.type == 0)">
            Добавление нового дела
        </template>
        <template #modal-title v-else>
            Редактирование дела
        </template>
        <input type="text" v-model="currentWorkItem.name">
        <div v-if="errorsWorkItem.length > 0">
            <p>
              {{ errorsWorkItem }}
            </p>
        </div>
        <hr>
        <div v-if="currentWorkItem.type == 1">
          <b-button variant="success" @click="NewValueWorkItem()">Сохранить</b-button>
          <b-button variant="danger" @click="DeleteWorkItemInList()">Удалить</b-button>
        </div>
        <div v-else>
          <b-button variant="outline-primary" @click="AddWorkItem()">Добавить</b-button>
        </div>
      </b-modal>

      <!--Модалка для дропа листа дел-->
      <b-modal id="delete_item" @ok="DeleteList()">
            Удалить выбранный элемент?
      </b-modal>

      <div class="main_cont">
        <!--лист дел-->
          <b-col v-for="(list, i) in getLists" :key="list.id"  xl="3" lg="4" md="6" sm="12" xs="12" class="card_countainer">
          <b-card 
            style="width: 15rem; margin: 1%; text-align: left;"
            :class="theme[currentThemeIndex]"
          >
            <div class="list_header">
              <div>
                {{ list.name }}
                <i class="fa-solid fa-pen-to-square list_icon" v-b-modal.modal-4 @click="SelectList(i)"></i>
              </div>
              <div>
                <i class="fa-solid fa-xmark list_icon" @click="SelectList(i)" v-b-modal.delete_item></i>
              </div>
            </div>
            <hr>
              <div class="list_main">
                <div v-for="(WorkItem, index) in list.content_list">
                <div>
                    {{ WorkItem.name }}
                      <i class="fa-solid fa-pen-to-square list_icon" v-b-modal.modal-3 @click="SelectWorkItem(i, index)"></i>
                  </div>
                </div>  
              </div>
            <div v-b-modal.modal-3 @click="(currentWorkItem = { }, currentWorkItem.index = i) && (modalWorkItem = !modalWorkItem)" class="list_footer">
              Добавить
              <i class="fa-solid fa-file-circle-plus list_icon"></i>
            </div>
          </b-card >
          </b-col>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NavBar from './NavBar.vue';

export default {
  name: "MainPage",
  components: {
    NavBar
  },
  data() {
    return {
      theme: [ "dark_theme", "light_theme" ],
      currentThemeIndex: 0,

      backgroundIndex: 2,
      backgroundIndexTmp: 0,
      newBackground: {},

      themeMenuOpened: false,

      currentList: {},
      currentWorkItem: {},

      modalList: false, 
      modalWorkItem: false,
      
      errorsList: "",
      errorsWorkItem: ""
    }
  },
  methods: {
    ...mapActions([
      'AddNewBackground', 
      'LoadLists', 
      'AddList', 
      'EditListName', 
      'DropList', 
      'AddNewWorkItem', 
      'DeleteWorkItem', 
      'EditWorkItem'
    ]),

    setTheme: function(index) {
      this.currentThemeIndex = index;
    },
    toggleThemeMenuOpened: function(){
      this.themeMenuOpened = !this.themeMenuOpened;
    },
    getThemeMenuOpened: function() {
      return this.themeMenuOpened;
    },

    // на открытии модалки выбора фона
    ModalBackgroundOnShow: function() {
      this.backgroundIndexTmp = this.backgroundIndex;
    },
    //смена фона
    ChangeBackImg: function() {
      this.backgroundIndex = this.backgroundIndexTmp;
    },

    //добавление нового изображения
    AddBackground: async function() {
      await this.AddNewBackground(this.newBackground);
      this.newBackground = {};
    },

    //выбор выбранного дела в листе
    SelectWorkItem: function(listIndex, listTask) {
      this.currentWorkItem = {};
      Object.assign(this.currentWorkItem, this.getLists[listIndex].content_list[listTask]);
      this.currentWorkItem.type = 1;
      this.currentWorkItem.index = listIndex;
    },
    //выбор выбранного листа
    SelectList: function(index) {
      this.currentList = {};
      Object.assign(this.currentList, this.getLists[index]);
      this.currentList.type = 1;
    },
    //Удаление листа дел
    DeleteList: async function() {
      await this.DropList(this.currentList);
      this.currentList = {}
    },
    //редактирование названия листа
    EditList: async function() {
      if((!this.currentList.name) || (this.currentList.name.length == 0)) {
        this.errorsList = "Поле не может быть пустым!";
      } else {
        await this.EditListName(this.currentList.name);
        this.currentList = {};
        this.modalList = !this.modalList;
        this.errorsList = "";
      }
    },
    //редактирование дела в листе
    NewValueWorkItem: async function() {
      if((!this.currentWorkItem.name) || (this.currentWorkItem.name.length == 0)) {
        this.errorsWorkItem = "Поле не может быть пустым!";
      } else {
        this.errorsWorkItem = "";
        await this.EditWorkItem(this.currentWorkItem);
        this.modalWorkItem = !this.modalWorkItem;
        this.currentWorkItem = {};
      }
    },
    //удаление дела из листа
    DeleteWorkItemInList: async function() {
      await this.DeleteWorkItem(this.currentWorkItem);
      this.modalWorkItem = false;
    },
    //добавление нового листа дел
    AddNewList: async function() {
      this.currentList.type = 0;
      if((!this.currentList.name) || (this.currentList.name.length == 0)) {
        this.errorsList = "Поле не может быть пустым!";
      } else {
        await this.AddList(this.currentList.name);
        this.errorsList = "";
        this.currentList = {};
        this.modalList = !this.modalList;
      }
    },
    //добавление в лист нового дела
    AddWorkItem: async function() {
      if((!this.currentWorkItem.name) || (this.currentWorkItem.name.length == 0)) {
        this.errorsWorkItem = "Поле не может быть пустым!";
      } else {
        await this.AddNewWorkItem(this.currentWorkItem);
        this.errorsWorkItem = "";
        this.modalWorkItem = !this.modalWorkItem;
      }
    }
  },
  async mounted() {
    await this.LoadLists()
  },
  computed: {
    ...mapGetters(['getBackgrounds', 'getLists'])
  }
}
</script>

<style scoped>
.back {
  min-height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
}
.background_cont {
  margin: 2%;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
.modal_cont {
  display: flex;
}
.background_img {
  margin: 1%;
  text-align: center;
}
.list_header{
  display: flex;
  justify-content: space-between;
  font-size: 110%;
}
.list_footer{
  padding-top: 4%;
  font-size: 110%;
  cursor: pointer;
}
.list_main{
  padding-top: 4%;
  padding-bottom: 4%;
}
.main_cont {
  padding-top: 2%;
  display: flex;
  flex-wrap: wrap;
}
.card_countainer{
  display: flex; 
  justify-content: center;
}
.list_icon{
  cursor: pointer;
}
</style>
