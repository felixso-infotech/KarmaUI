import { User } from "./user";

export interface CommittedActivity {
    id: number,
    postedUser: User,
    activityTitle: String,
    description: String,
    noOfLoves: String,
    noOfComments: String,
    noOfShares: String,
    timeElapsed: String,
    postedImage: String,
    isLiked: Boolean
}
