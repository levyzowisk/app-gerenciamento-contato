export interface IContact {
  id: string;
  name: string;
  phone: string;
}

export interface IContactDto extends Omit<IContact, 'id'> {}

