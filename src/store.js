import { reactive } from "vue";
// reactive è un metodo che rende tutto reattivo fuori di data

export const store = reactive({
    searchKey: '',
    characters:[],
    charactersFound: 0
})