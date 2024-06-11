export interface BaseUser {
  uuid: string;
  name: string;
  profileImageUrl?: string;
}

export interface User extends BaseUser {
  provider: string;
  email: string;
  profileImageUrl?: string;
}

export interface UserArtist extends BaseUser {
  description: string;
}
