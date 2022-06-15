// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export type UserManager = {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  company: string;
  isVerified: boolean;
  status: string;
  role: string;
};

export enum UserRole {
  SUPER_ADMIN = 'Super Admin',
  OWNER = 'Owner',
  CLIENT_ADMIN = 'Client Admin',
  SITE_ATTENDANT = 'Site Attendant',
  SITE_ENERGY_ADMIN = 'Site Energy Admin'
}

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userStatusId?: number;
  userRoleId?: number;
  blocked?: boolean;
  BoostGroup?: { boostGroupId: number; boostGroupName?: string };
  SubBoostGroup?: { subBoostGroupId: number; subBoostGroupName?: string };
  Owner?: {
    ownerId: number;
    userId?: number;
    ownerName: string;
    status: string;
  };
  createdAt?: string;
};

export interface UsersTableItem {
  userId?: number;
  firstName: string;
  lastName: string;
  clientName: string;
  active: string;
  creationDate: string;
  userRoleId: number;
  email?: string;
  boostGroup?: string;
}

export interface UserInterface {
  email: string;
  originalEmail?: string;
  firstName: string;
  lastName: string;
  password: string;
  clientName?: string;
  rememberToken?: string;
  boostGroupId?: string;
  userStatusId: number;
  userRoleId: number;
  blocked?: number;
  ownerId?: number;
}
export interface UsersResponseInterface {
  count: number;
  rows: User[];
}

export interface UserRolesInterface {
  userRoleId: number;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export type UserData = {
  id: string;
  avatarUrl: string;
  cover: string;
  name: string;
  follower: number;
  following: number;
  totalPost: number;
  position: string;
};
