import { User } from "./user";

export interface CommittedActivity {
    postedUser: User,
    activityTitle: String,
    description: String,
    noOfLoves: String,
    noOfComments: String,
    noOfShares: String,
    timeElapsed: String,
    postedImage: String
}
