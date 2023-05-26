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


