// @flow
import type {
  UserJID,
  RoomJID,
} from "./JID";

import type {
  Message,
  MessageContent,
} from './message';

import {
  createUserJID,
  createRoomJID
} from "./JID"

type Room = {
  room: RoomJID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomJID,
  userId: UserJID,
  messageContent: MessageContent
) {
  const room : Room = { room: roomId, messages: [] };
  room.messages.push({ user: userId, message: messageContent });
}
type Request = {
  body: {
    roomId: string;
    userId: string;
    messageContent: MessageContent;
  };
};

export default function handleRequest(req: Request) {
  const { roomId, userId, messageContent } = req.body;
  const userJID = createUserJID(userId);
  const roomJID = createRoomJID(roomId);
  addMessage(userJID, roomJID, messageContent);
}
