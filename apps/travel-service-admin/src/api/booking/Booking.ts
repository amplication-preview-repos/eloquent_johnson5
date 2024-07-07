import { User } from "../user/User";
import { Destination } from "../destination/Destination";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  bookingDate: Date | null;
  user?: User | null;
  destination?: Destination | null;
};
