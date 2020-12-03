import React, { useReducer } from "react";
import axios from "axios";
import * as types from "../constant/actionTypes";
import { sortByTitle } from "../helper/sortByTitle";

const useGetEntriesHook = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const getEntries = async () => {
    try {
      const movies = await axios.get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      );

      const sortedEntries = movies.data.entries
        .filter((item) => {
          return item.releaseYear >= 2010;
        })
        .sort(sortByTitle);
      dispatch({
        type: types.GET_ALL_ENTRIES,
        payload: sortedEntries,
      });
    } catch (e) {
      throw e;
    }
  };

  return { state, getEntries };
};

export default useGetEntriesHook;
