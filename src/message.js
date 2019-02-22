// @flow
import type {
  UserJID,
} from "./JID";

export type MessageContent = string;

export opaque type Message = {
  user: UserJID;
  message: MessageContent;
};