import GameSavingLoader from "./GameSavingLoader";

const loader = new GameSavingLoader();
loader.load()
.then(saving => {
    console.log(`Объект ${saving.data} загружен`)
})
.catch(e => new Error(e));