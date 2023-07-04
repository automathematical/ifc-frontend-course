import {Dexie} from 'dexie'

interface IModel {
    id: string;
    file: Blob;
}

export class ModelDatabase extends Dexie {
    models!: Dexie.Table<IModel, number>

    constructor() {
        super("ModelDataBase")
        this.version(2).stores({
            models: 'id, file'
        })
    }
}