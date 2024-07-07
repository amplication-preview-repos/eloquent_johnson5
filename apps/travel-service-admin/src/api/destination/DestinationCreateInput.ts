import { BookingCreateNestedManyWithoutDestinationsInput } from "./BookingCreateNestedManyWithoutDestinationsInput";
import { ReviewCreateNestedManyWithoutDestinationsInput } from "./ReviewCreateNestedManyWithoutDestinationsInput";

export type DestinationCreateInput = {
  name?: string | null;
  description?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  bookings?: BookingCreateNestedManyWithoutDestinationsInput;
  reviews?: ReviewCreateNestedManyWithoutDestinationsInput;
};
