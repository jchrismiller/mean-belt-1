import { Post } from '../post/post';
import { Answer } from '../post/answer';

export class User {

	name: string = '';
	createdAt: Date;
	updatedAt: Date;
	post: Post[];
	answer: Answer[];

	constructor() {
	}
}
