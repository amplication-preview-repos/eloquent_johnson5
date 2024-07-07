import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type ReviewCreateInput = {
  rating?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
  destination?: DestinationWhereUniqueInput | null;
};
