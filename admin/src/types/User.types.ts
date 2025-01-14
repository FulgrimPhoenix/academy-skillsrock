export interface IUser {
  createdAt: Date;
  first_name: string;
  last_name: string;
  password: string;
  role: string;
  username: string;
  __v: number;
  _id: string;
}

export type TuserStatus = 'idle' | 'loading' | 'fetching' | 'fetched' | 'failed' | 'succeeded';

export type Tcolumn = { field: string; headerName: string; flex: number };