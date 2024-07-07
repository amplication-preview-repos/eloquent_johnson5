import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  bookingDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  destination?: DestinationWhereUniqueInput;
};
