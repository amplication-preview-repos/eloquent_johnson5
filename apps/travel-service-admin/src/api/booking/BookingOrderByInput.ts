import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  bookingDate?: SortOrder;
  userId?: SortOrder;
  destinationId?: SortOrder;
};
