import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type Destination = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  location: string | null;
  imageUrl: string | null;
  bookings?: Array<Booking>;
  reviews?: Array<Review>;
};
