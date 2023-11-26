export default {
    state: {
        lists: []
    },
    mutations: {
        setLists: (state, item) => state.lists = item,
        setList: (state, item) => state.lists.push(item),
        setNewValue: (state, item) => {
            let len = state.lists.length;
            for(let i = 0; i<len; i++) {
                if(state.lists[i].id == item.id) {
                    state.lists[i].name = item.name;
                    break;
                }
            }
        },
        setDropList: (state, item) => {
            let len = state.lists.length;
            for(let i = 0; i<len; i++) {
                if(state.lists[i].id == item.id) {
                    state.lists.splice(i, 1)
                    break;
                }
            }
        },
        setNewWorkItem: (state, item) => {
            let WorkItem = {
                id: item.id,
                name: item.name
            };
            state.lists[item.index].content_list.push(WorkItem);
        },
        setDeleteWorkItem: (state, item) => {
            const len = state.lists[item.index].content_list.length;
            for(let i = 0; i<len; i++) {
                if(state.lists[item.index].content_list[i].name == item.name) {
                    state.lists[item.index].content_list.splice(i, 1);
                    break;
                }
            }
        },
        setEditWorkItem: (state, item) => {
            const len = state.lists[item.index].content_list.length;
            for(let i = 0; i<len; i++) {
                if(state.lists[item.index].content_list[i].id == item.id) {
                    state.lists[item.index].content_list[i].name = item.name;
                    break;
                }
            }
        }
    },
    actions: {
        LoadLists: async(ctx) => {
            let response = [
                {
                    id: 1,
                    name: "Лист1",
                    content_list: [
                        {
                            id: 11,
                            name: "Помыться"
                        },
                        {
                            id: 12,
                            name: "Вынести мусор"
                        },
                        {
                            id: 13,
                            name: "Приготовить борщ"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Среда",
                    content_list: [
                        {
                            id: 21,
                            name: "Испечь торт"
                        },
                        {
                            id: 22,
                            name: "Сходить в магазин"
                        },
                    ]
                }
            ];
            ctx.commit('setLists', response);
        },
        //добавление нового листа дел
        AddList: async(ctx, name) => {
            let list_new = {
                id: Math.random() * 100,
                name: name,
                content_list: []
            }
            ctx.commit('setList', list_new)
        },
        //Удаление листа дел
        DropList: async(ctx, dropItem) => {
            ctx.commit('setDropList', dropItem);
        },
      //редактирование названия листа
      EditListName: async(ctx, newValue) => {
        ctx.commit('setNewValue', newValue)
      },
      //редактирование дела в листе
      EditWorkItem: async(ctx, WorkItem) => {
        ctx.commit('setEditWorkItem', WorkItem);
      },
      //удаление дела из листа
      DeleteWorkItem: async(ctx, WorkItem) => {
        ctx.commit('setDeleteWorkItem', WorkItem)
      },
      //добавление в лист нового дела
      AddNewWorkItem: async(ctx, newWorkItem) => {
        newWorkItem.id = Math.random() * 100;
        ctx.commit('setNewWorkItem', newWorkItem);
      }
    },
    getters: {
        getLists: state => state.lists
    }
}