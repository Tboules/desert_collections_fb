interface Author {
  firstName: string;
  lastName?: string;
  prefix?: string;
  suffix?: string;
  slug: string;
  createdAt?: Date;
  display: string;
}

interface UserRecord {
  displayName: string | null;
  email: string | null;
  profileImg: string | null;
  joinedOn: number;
  uid: string;
  contributions: number;
}
