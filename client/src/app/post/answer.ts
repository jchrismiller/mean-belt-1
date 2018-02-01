import { User } from '../user/user'
export class Answer {
	_id: string;
	content: string;
	details: string;
	_user: User;
	likes: number;
	_post: string;
	question: string;
}
