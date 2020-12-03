import { useEffect, useState } from "react";
import useGetEntriesHook from "../action/useGetEntriesHook";
import entriesReducer from "../reducers/entriesReducer";

const useFetchApi = () => {
  const { state, getEntries } = useGetEntriesHook(entriesReducer, {
    entries: [],
  });
  let [isLoading, setIsLoading] = useState(true);
  let [failedFetch, setFailedFetch] = useState(false);
  let [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      getEntries()
        .then(() => {
          setIsLoading(false);
        })
        .catch((e) => {
          setFailedFetch(true);
        });
    }

    return () => setMounted(false);
  }, [mounted, getEntries]);

  return { isLoading, failedFetch, state };
};

export default useFetchApi;
