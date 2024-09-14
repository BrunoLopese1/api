export class CreateTagDto {
  id: number;
  name: string;
  color: string;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
  kanban: boolean;
  description: string;
  index: string;
}
