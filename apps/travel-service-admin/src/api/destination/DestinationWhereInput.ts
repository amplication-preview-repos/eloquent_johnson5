import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type DestinationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
