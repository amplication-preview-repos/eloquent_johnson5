import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntNullableFilter;
  comment?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  destination?: DestinationWhereUniqueInput;
};
