interface userCredentials {
  userId: number | string;
  name: string;
  dateOfBirth: string;
  email: string;
  status: 'active' | 'inactive';
}

// collect information from database

export const userCredentials: userCredentials = {
  userId: 1,
  name: 'Gurinderpal Singh',
  dateOfBirth: '2002-10-03',
  email: 'g_singh179326@fanshaweonline.ca',
  status: 'active',
};
