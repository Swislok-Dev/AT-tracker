import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import flightsService from "./flightsService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  flights: [],
};

export const getFlights = createAsyncThunk(
  "flights/:ident",
  async (flightNumber, thunkAPI) => {
    try {
      return await flightsService.getFlightInfo(flightNumber);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getInitFlights = createAsyncThunk(
  "flights",
  async (_, thunkAPI, state) => {
    try {
      return await flightsService.getMockFlights();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const flightsSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.flights = action.payload;
      })

      .addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getInitFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInitFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.flights = action.payload;
      })
      .addCase(getInitFlights.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { reset } = flightsSlice.actions
export default flightsSlice.reducer;
