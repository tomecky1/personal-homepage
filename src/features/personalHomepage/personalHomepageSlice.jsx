import {createSlice} from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      repositories: null,
      status: "loading",
    }),
    fetchRepositoriesFailed: () => ({
      repositories: null,
      status: "error",
    }),
    fetchRepositoriesSuccess: (state, {payload: repositories}) => ({
      status: "success",
      repositories,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailed,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;
export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectStatus = state => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;