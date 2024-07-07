import { InputJsonValue } from "../../types";
import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bookings?: BookingUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
