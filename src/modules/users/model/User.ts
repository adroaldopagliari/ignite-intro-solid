import { v4 as uuidV4 } from 'uuid';

class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, { ...partial, id: uuidV4() });
  }

  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
}

export { User };
