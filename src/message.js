// @flow
import type {
  UserID,
} from "./ID";

export type MessageContent = string;

export opaque type Message = {
  userId: UserID;
  message: MessageContent;
};