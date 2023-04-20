import { v4 as uuidV4 } from "uuid";

class User {
  id: string = uuidV4();
  name: string;
  email: string;
  admin = false;
  created_at: Date;
  updated_at: Date;
}

export { User };
