// @flow

export opaque type UserID = string;
export opaque type RoomID = string;

export function createUserID(userId: string): UserID {
  return userId;
}
export function createRoomID(roomId: string): RoomID {
  return roomId;
}
