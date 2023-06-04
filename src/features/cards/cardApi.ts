import {instance} from "common/instanceAxios/instansAxios";


export const cardApi = {
	fetchCards (cardsPack_id:string,page?:number,cardQuestion?:string,sortCards?:string,pageCount?:number) {
		return instance.get<GetResponseCardsType>('cards/card',{params:{cardsPack_id,page,cardQuestion,sortCards,pageCount}})
	},
	createCard(card:PayloadPostRequestType){
		return instance.post<PostResponseType>('cards/card',card)
	},
	deleteCard(id:string){
		/*return instance.delete('cards/card',id)*/
		return instance.delete(`cards/card?id=${id}`)
	},
	updateCard(payload:PayloadPutType){
		return instance.put('cards/card',payload)
	}
}
export type PostResponseType = {
	newCard: CardType;
	token: string;
	tokenDeathTime: number;
}

export type PayloadPutType = {
	card: {
		_id: string,
		question: string
		answer:string
	}
}
export  type  PayloadPostRequestType = {
	card:{
		cardsPack_id:string
		question: string
		answer: string
	}
}




export type GetResponseCardsType = {
	cards: CardType[];
	packUserId: string;  /*айдишка юзера который создал данные карточки*/
	packName: string;     /*название колоды*/
	packPrivate: boolean;
	packDeckCover: string;  /*обложка--типо картинка----это на потом*/
	packCreated: string;  /*колода когда создавалась*/
	packUpdated: string;   /*колода когда обнавлялась*/
	page: number;   /*для пагинации   страница  какая пришла*/
	pageCount: number;  /* количество  карточек на странице*/
	cardsTotalCount: number;   /*всего количество карточек в данной колоде*/
	minGrade: number;   /* типо для звездочек показывает от какого уровня в                      колоде и до какого уровня ---не использую*/
	maxGrade: number;
	token: string;
	tokenDeathTime: number;
}
export type CardType = {
	_id: string;  /*айди карточки*/
	cardsPack_id: string;  /*айди калоды*/
	user_id: string;  /*айди создателя карточки*/
	answer: string;    /*ответ---нужное поле*/
	question: string;  /* вопрос--нужное поле*/
	grade: number;  /* оценка за карточку---типо звезды*/
	shots: number;  /* количество раз---сколько обучался*/
	questionImg: string; /* для последнего занятия*/
	answerImg: string; /* для последнего занятия*/
	comments: string;  /*не используется*/
	type: string; /* не нужен*/
	rating: number;   /*не нужен*/
	more_id: string; /* не нужно*/
	created: string;  /*дата создания карточки*/
	updated: string;   /*дата обновления карточки*/
	__v: number;  /*версия---не нужна*/
	answerVideo: string; /* для последнего занятия*/
	questionVideo: string; /* для последнего занятия*/
}

/*
import {instance} from "common/instanceAxios/instansAxios";


export const cardApi = {
    fetchCards (cardsPack_id:string,pageCount?:number,page?:number,cardQuestion?:string) {
        return instance.get<GetResponseCardsType>('cards/card',{params:{cardsPack_id,pageCount,page,cardQuestion}})
    },
	createCard(card:any){
		return instance.post<PostResponseType>('cards/card',{card})
	}
}
export type PostResponseType = {
	newCard: CardType;
	token: string;
	tokenDeathTime: number;
}


type  PayloadPostRequestType = {
	card:{
		cardsPack_id:string
		question: string
		answer: string
		grade: number
		shots: number
		answerImg: string
		questionImg: string
		questionVideo: string
		answerVideo: string
	}
}

export type GetResponseCardsType = {
	cards: CardType[];
	packUserId: string;  /!*айдишка юзера который создал данные карточки*!/
	packName: string;     /!*название колоды*!/
	packPrivate: boolean;
	packDeckCover: string;  /!*обложка--типо картинка----это на потом*!/
	packCreated: string;  /!*колода когда создавалась*!/
	packUpdated: string;   /!*колода когда обнавлялась*!/
	page: number;   /!*для пагинации   страница  какая пришла*!/
	pageCount: number;  /!* количество  карточек на странице*!/
	cardsTotalCount: number;   /!*всего количество карточек в данной колоде*!/
	minGrade: number;   /!* типо для звездочек показывает от какого уровня в                      колоде и до какого уровня ---не использую*!/
	maxGrade: number;
	token: string;
	tokenDeathTime: number;
}
export type CardType = {
	_id: string;  /!*айди карточки*!/
	cardsPack_id: string;  /!*айди калоды*!/
	user_id: string;  /!*айди создателя карточки*!/
	answer: string;    /!*ответ---нужное поле*!/
	question: string;  /!* вопрос--нужное поле*!/
	grade: number;  /!* оценка за карточку---типо звезды*!/
	shots: number;  /!* количество раз---сколько обучался*!/
	questionImg: string; /!* для последнего занятия*!/
	answerImg: string; /!* для последнего занятия*!/
	comments: string;  /!*не используется*!/
	type: string; /!* не нужен*!/
	rating: number;   /!*не нужен*!/
	more_id: string; /!* не нужно*!/
	created: string;  /!*дата создания карточки*!/
	updated: string;   /!*дата обновления карточки*!/
	__v: number;  /!*версия---не нужна*!/
	answerVideo: string; /!* для последнего занятия*!/
	questionVideo: string; /!* для последнего занятия*!/
}*/
