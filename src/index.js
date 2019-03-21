// @flow
import type {
  UserID,
  RoomID,
} from "./ID";

import type {
  Message,
  MessageContent,
} from './message';

import {
  createUserID,
  createRoomID
} from "./ID"

type Room = {
  roomId: RoomID,
  messages: Message[]
};

export function addMessage(
  roomId: RoomID,
  userId: UserID,
  messageContent: MessageContent
) {
  const room : Room = { roomId: roomId, messages: [] };
  room.messages.push({ userId, message: messageContent });
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
  const userID = createUserID(userId);
  const roomID = createRoomID(roomId);
  addMessage(userID, roomID, messageContent);
}
