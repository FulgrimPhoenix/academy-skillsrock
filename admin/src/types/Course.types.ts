export interface ICourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  modules: string;
  students: string;
}



export type TcourseStatus = 'idle' | 'loading' | 'succeeded' | 'failed';