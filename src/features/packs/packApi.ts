import {instance} from "common/instanceAxios/instansAxios";

export const packApi = {
    fetchPacks () {
        return instance.get('cards/pack')
    }
}