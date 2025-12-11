export enum UserRole {
  CLIENT = 'client',
  EXPERT = 'expert',
  ADMIN = 'admin'
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
}

export type AuthMode = 'login' | 'signup';
