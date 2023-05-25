import {GetResponsePacksType} from "features/packs/packApi";


type HeadersPacksType = {
    id:number
    title:string
    align:"center" | "left" | "right" | "inherit" | "justify" | undefined
    arrowDirection:boolean
    fieldFromType:string
}

export type initialPacksStateType = GetResponsePacksType & {
    dataTableHeadersPacks:HeadersPacksType[]
}


export const initialPacksState:initialPacksStateType = {
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
    dataTableHeadersPacks:[
        {id:1,title:'Наименование Колоды',align:'left',arrowDirection:true,fieldFromType:'name'},
        {id:2,title:'Карточки',align:'center',arrowDirection:true,fieldFromType:'cardsCount'},
        {id:3,title:'Последнее обновление',align:'center',arrowDirection:true,fieldFromType:'updated'},
        {id:4,title:'Автор',align:'center',arrowDirection:true,fieldFromType:'user_name'},
    ]
}