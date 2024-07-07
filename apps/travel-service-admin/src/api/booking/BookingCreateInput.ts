import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type BookingCreateInput = {
  status?: "Option1" | null;
  bookingDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  destination?: DestinationWhereUniqueInput | null;
};
