import GameSaving from './GameSaving';
import json from './parser'
import read from './reader'

export default class GameSavingLoader {
    async load() {
        const data = await read();
        const gotdata = await json(data);
        return new GameSaving(JSON.parse(gotdata));
        }
    }