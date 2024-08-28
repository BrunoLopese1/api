export interface CreateUserDto {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
  profile: string;
  tokenVersion: number;
  companyId: number;
  super: number;
  whatsappId: number;
  phone: string;
  photo: string;
  plan: string;
  message: string;
}
