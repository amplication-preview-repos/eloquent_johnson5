import { User } from "../user/User";
import { Destination } from "../destination/Destination";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  user?: User | null;
  destination?: Destination | null;
};
