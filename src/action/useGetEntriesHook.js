import { useReducer } from "react";
import axios from "axios";
import * as types from "../constant/actionTypes";
import { sortByTitle } from "../helper/sortByTitle";

const URL =
  "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

const useGetEntriesHook = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getEntries = async () => {
    try {
      const entriesArray = await axios.get(URL);

      const sortedEntries = entriesArray.data.entries
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
