import GameSavingLoader from "../GameSavingLoader";

test('check method load - class GameSavingLoader', async() => {
    const loader = new GameSavingLoader();
    const result = await loader.load();
    const obj = {
        created: 1546300800,
        id: 9,
        userInfo: {
            id: 1,
            level: 10,
            name: "Hitman",
            points: 2000
        }
    }
    expect(result.data).toEqual(obj);
})