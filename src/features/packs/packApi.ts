import {instance} from "common/instanceAxios/instansAxios";

export const packApi = {
    fetchPacks(pageCount?: number, page?: number,packName?:string) {

        return instance.get<GetResponsePacksType>(`cards/pack`,{params:{pageCount,page,packName}})
    }
}
/*
export const packApi = {
    fetchPacks(pageCount?: number, page?: number,packName?:string) {

        return instance.get<GetResponsePacksType>(`cards/pack?pageCount=${pageCount}&page=${page}&packName=${packName}`)
    }
}*/

type CardPacksType = {
    _id: string;  /*id колоды*/
    user_id: string;   /*id пользователя  который создатель*/
    user_name: string;  /*имя создателя колоды*/
    private: boolean;
    name: string;     /* имя-название   колоды*/
    path: string;
    grade: number;
    shots: number;
    cardsCount: number;  /*количество карточек в колоде*/
    type: string;
    rating: number;
    created: string;  /*дата создание колоды */
    updated: string;   /*дата редактирования колоды*/
    more_id: string;
    __v: number;
}

export type GetResponsePacksType = {
    cardPacks: CardPacksType[];
    page: number;    /*номер страницы*/
    pageCount: number;    /* количество колод на одной странице*/
    cardPacksTotalCount: number;  /*общее количество колод на сервере*/
    minCardsCount: number;    /*для СЛАЙДЕРА карточки в одной колоде*/
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
}

/*

    Query-ПАРАМЕТРЫ для get запроса
    ? packName = english   это для поиска КОЛОД по введенным символам
    & min = 3     это для Slider
    & max = 9       это для Slider
    & sortPacks = 0updated     у таблицы есть заголовки и кликая по ним будет
                               делатся сартировка
    & page = 1         страница
    & pageCount = 4     количество колод на одной странице
    & user_id = 5eb543f6bea3ad21480f1ee7  понадобится при отображении моих колод
    & block = true

*/


