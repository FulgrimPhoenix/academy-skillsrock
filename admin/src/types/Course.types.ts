export interface ICourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  modules: string;
  students: string;
}

export type TinitialState = {
  courses: ICourse[];
  course: null | ICourse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
  totalPages: number | null;
  currentPage: number | null;
};
