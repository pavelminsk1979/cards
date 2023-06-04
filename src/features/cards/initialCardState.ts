import {CardType} from "features/cards/cardApi";


export type InitialCardsStateType={
    cards: CardType[]
    packName: string,
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    cardQuestion: string,

    currentIdPack:string
    valueSortCards:string
    randomNumberForLearnCard:number
}

export const initialCardsState:InitialCardsStateType = {
    cards:[{
        _id: '',
        cardsPack_id: '',
        user_id: '',
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        questionImg: '',
        answerImg: '',
        comments: '',
        type: '',
        rating: 0,
        more_id: '',
        created: '',
        updated: '',
        __v: 0,
        answerVideo: '',
        questionVideo: '',
    }],
    packName: '',
    page: 1,
    pageCount: 5,
    cardsTotalCount: 0,
    cardQuestion: '',
    currentIdPack:'',
    valueSortCards:'',
    randomNumberForLearnCard:0
}


