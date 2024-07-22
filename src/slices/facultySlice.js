import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { facultyData} from '../data/facultyData'  
// Simulate asynchronous fetch
const fetchFacultyData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(facultyData);
    }, 1000);
  });
};

export const fetchFaculty = createAsyncThunk('faculty/fetchFaculty', async () => {
  try {
    const response = await fetchFacultyData();
    return response;
  } catch (error) {
    throw Error('Failed to fetch faculty data');
  }
});

const facultySlice = createSlice({
  name: 'faculty',
  initialState: {
    facultyData: [],
    error: null,
    status: 'idle',
  },
  reducers: {
    // You can add additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaculty.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFaculty.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.facultyData = action.payload;
        state.error = null;
      })
      .addCase(fetchFaculty.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllFaculty = (state) => state.faculty.facultyData;
export const selectFacultyById = (state, facultyId) =>
  state.faculty.facultyData.find((faculty) => faculty.Id === facultyId);

export default facultySlice.reducer;
