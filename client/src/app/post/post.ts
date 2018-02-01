import { Answer } from './answer'

export class Post {
	_id: string;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	answers: Answer[] = [];
}
