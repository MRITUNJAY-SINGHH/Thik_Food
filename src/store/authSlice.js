import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from './firebaseConfig'; 
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';


import { signInWithEmailAndPassword } from 'firebase/auth';

// Async thunk for signing in
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      const userWithUsername = {
        ...userCredential.user,
        username
      };
      return userWithUsername;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// Async thunk for signing out
export const signOutUser = createAsyncThunk('auth/signOut', async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
    username: null,
    isNewUser: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isNewUser = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.username = action.payload.username;
        state.error = null;
        state.isNewUser = true; 
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

