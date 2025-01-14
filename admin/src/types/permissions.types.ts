export type Tpermission = {
  _id: string;
  name: string;
  description: string;
};

export type TpermissionStatus = 'idle' | 'fetching' | 'fetched' | 'failed' | 'succeeded' | 'loading';