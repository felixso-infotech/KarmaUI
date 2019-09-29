import { User } from "./user";

export interface Reply {
    message: String,
    postedUser: User,
    timeElapsed: String,
    commentId: number
}

