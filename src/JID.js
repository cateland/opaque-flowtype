// @flow

export opaque type UserJID = string;
export opaque type RoomJID = string;

export function createUserJID(userId: string): UserJID {
  return userId;
}
export function createRoomJID(roomId: string): RoomJID {
  return roomId;
}
