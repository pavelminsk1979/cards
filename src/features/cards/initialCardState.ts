import {CardType} from "features/cards/cardApi";


export type InitialCardsStateType={
    cards: CardType[]
    packName: string,
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    cardQuestion: string,
    sortCards: string,
    currentIdPack:string
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
    page: 0,
    pageCount: 0,
    cardsTotalCount: 0,
    cardQuestion: '',
    sortCards: '',
    currentIdPack:''
}



/*


export  type InitialCardsStateType = {
    _id: string,
/!*    cardsPack_id: string,
    user_id: string,
    answer: string,
    question: string,
    grade: number,
    shots: number,
    created: string,
    updated: string,
    packName: string,
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    cardQuestion: string,
    sortCards: string,*!/
}
export const initialCardsState: InitialCardsStateType = {
    _id: '',
/!*    cardsPack_id: '',
    user_id: '',
    answer: '',
    question: '',
    grade: 0,
    shots: 0,
    created: '',
    updated: '',
    packName: '',
    page: 0,
    pageCount: 0,
    cardsTotalCount: 0,
    cardQuestion: '',
    sortCards: '',*!/
}


*/






/*
import {GetResponseCardsType} from "features/cards/cardApi";


export const initialCardsState:GetResponseCardsType = {
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
    packUserId: '',
    packName: '',
    packPrivate: true,
    packDeckCover: '',
    packCreated: '',
    packUpdated: '',
    page: 0,
    pageCount: 0,
    cardsTotalCount: 0,
    minGrade: 0,
    maxGrade: 0,
    token: '',
    tokenDeathTime: 0,
}
*/


