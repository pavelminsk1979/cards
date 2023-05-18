import {instance} from "common/instanceAxios/instansAxios";

export const packApi = {
    fetchPacks (pageCount:number,page:number) {
        return instance.get<GetResponsePacksType>(`cards/pack?pageCount=${pageCount}&page=${page}`)
    }
}

 type CardPacksType = {
	_id: string;
	user_id: string;
	user_name: string;
	private: boolean;
	name: string;
	path: string;
	grade: number;
	shots: number;
	cardsCount: number;
	type: string;
	rating: number;
	created: string;
	updated: string;
	more_id: string;
	__v: number;
}

export type GetResponsePacksType = {
	cardPacks: CardPacksType[];
	page: number;
	pageCount: number;
	cardPacksTotalCount: number;
	minCardsCount: number;
	maxCardsCount: number;
	token: string;
	tokenDeathTime: number;
}

