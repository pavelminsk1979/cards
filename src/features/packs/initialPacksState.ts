import {GetResponsePacksType} from "features/packs/packApi";

export const initialPacksState:GetResponsePacksType = {
    cardPacks: [{
        _id: '',
        user_id: '',
        user_name: '',
        private: true,
        name: '',
        path: '',
        grade: 1,
        shots: 1,
        cardsCount: 1,
        type: '',
        rating: 0,
        created: '',
        updated: '',
        more_id: '',
        __v: 0,
    }],
    page: 0,
    pageCount: 0,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    token: '',
    tokenDeathTime: 0,
}