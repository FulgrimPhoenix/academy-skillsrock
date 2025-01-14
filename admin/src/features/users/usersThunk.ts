// Base URL for the API
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '~types/user.types';

import apiClient from '~utils/apiClient';

const API_URL = '/users';

// Async Thunks for fetching and creating users
// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (): Promise<{ users: IUser[] }> => {
  const response = await apiClient.get(API_URL);
  return response.data;
});

// Fetch specific user
export const fetchUser = createAsyncThunk('users/fetchUser', async (userId: Pick<IUser, '_id'>): Promise<IUser> => {
  const response = await apiClient.get(`${API_URL}/${userId}`);
  return response.data;
});

// Add a new user
export const addUser = createAsyncThunk('users/addUser', async (newUser: IUser): Promise<IUser> => {
  const response = await apiClient.post(API_URL, newUser);
  return response.data;
});

// Update a user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userId, updatedUser }: { userId: string; updatedUser: IUser }): Promise<{ user: IUser }> => {
    const response = await apiClient.put(`${API_URL}/${userId}`, updatedUser);
    return response.data;
  },
);

// Delete a user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: Pick<IUser, '_id'>): Promise<Pick<IUser, '_id'>> => {
    await apiClient.delete(`${API_URL}/${userId}`);
    return userId;
  },
);
