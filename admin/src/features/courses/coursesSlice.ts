import { createSlice, current } from '@reduxjs/toolkit';

import { addCourse, deleteCourse, fetchCourse, fetchCourses, updateCourse } from './coursesThunk';
import { ICourse } from '~types/Course.types';

type TinitialState = {
  courses: ICourse[];
  course: null | ICourse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
  totalPages: number | null;
  currentPage: number | null;
};

const initialState: TinitialState = {
  courses: [],
  course: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  totalPages: null,
  currentPage: null,
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload.courses;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Undefinded error';
      })
      .addCase(fetchCourse.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Undefinded error';
      })
      // в этом моменте я не понял логику фильтрации. В компоненте по созданию курса в структуре объекта курса отсутсвовал id.
      // Я чсейчас добавил это поле с просто пустой строкой, чтобы ts не ругался, но это костыль
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
      });
  },
});

// export const { addCourse, updateCourse, fetchCourse, fetchCourses } = coursesSlice.actions;
