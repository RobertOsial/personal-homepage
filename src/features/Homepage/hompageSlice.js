import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSucccess: (_, action) => ({
      status: "success",
      repositories: action.payload,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSucccess,
  fetchRepositoriesError,
} = homepageSlice.actions;

const selectHomePageState = state => state.homepage;

export const selectRepositories = state => selectHomePageState(state).repositories;
export const selectRepositoriesStatus = state => selectHomePageState(state).status;

export default homepageSlice.reducer;