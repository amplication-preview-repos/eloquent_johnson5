import { BookingUpdateManyWithoutDestinationsInput } from "./BookingUpdateManyWithoutDestinationsInput";
import { ReviewUpdateManyWithoutDestinationsInput } from "./ReviewUpdateManyWithoutDestinationsInput";

export type DestinationUpdateInput = {
  name?: string | null;
  description?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  bookings?: BookingUpdateManyWithoutDestinationsInput;
  reviews?: ReviewUpdateManyWithoutDestinationsInput;
};
