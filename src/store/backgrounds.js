export default {
    state: {
        backgrounds: [
            {
                backgroundUrl: "https://www.patee.ru/r/x6/05/59/4c/960m.jpg",
                name: "sugar"
            },
            {
                backgroundUrl: "https://images.techinsider.ru/upload/img_cache/630/630d706c652fb5c70989b4b00bd04675_ce_1024x682x236x112.jpg",
                name: "animal"
            },
            {
                backgroundUrl: "https://img.freepik.com/premium-vector/beautiful-blue-night-with-river-and-forest-with-moon-and-stars_104785-377.jpg",
                name: "dark natural"
            }
        ]
    },
    mutations: {
        setNewBackground: (state, item) => state.backgrounds.push(item)
    },
    actions: {
        //добавление новой картинки в доступные фоны
        AddNewBackground: async(ctx, newBackground) => {
            ctx.commit('setNewBackground', newBackground)
        }
    },
    getters: {
        getBackgrounds: state => state.backgrounds
    }
}