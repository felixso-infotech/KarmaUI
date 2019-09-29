import { User } from "./user";

export interface Comment {
    message: String,
    postedUser: User,
    timeElapsed: String,
    committedActivityId: number,
    noOfLikes: String,
    noOfRe0plies: String 
}
