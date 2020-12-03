import React, { useEffect, useState } from "react";
import List from "../Common/List";
import ImageItem from "../Common/ImageItem";
import useGetEntriesHook from "../../action/useGetEntriesHook";
import entriesReducer from "../../reducers/entriesReducer";
import PageHeader from "../Common/PageHeader";
import "./Movies.css";

const Movies = () => {
  const { state, getEntries } = useGetEntriesHook(entriesReducer, { entries: [] });
  let [isLoading, setIsLoading] = useState(true);
  let [failedFetch, setFailedFetch] = useState(false);

  useEffect(() => {
    getEntries()
      .then(() => {
        setIsLoading(false);
      })
      .catch((e) => {
        setFailedFetch(true);
      });

    return () => {
      return null;
    };
  });

  const showList = (state, isLoading, failedFetch) => {
    let filteredEntries = [];
    if (failedFetch) {
      return <p>Oops something went wrong...</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (state.entries && state.entries.length !== 0) {
      filteredEntries = state.entries.filter((entry) => {
        return entry.programType === "movie";
      });
    }
    return (
      <List>
        {filteredEntries.map((entry) => {
          return (
            <ImageItem
              key={entry.title}
              imageSrc={entry.images["Poster Art"].url}
              title={entry.title}
            />
          );
        })}
      </List>
    );
  };

  return (
    <div>
      <PageHeader title={"Popular Movies"} />
      <div className="movies-main">
        {showList(state, isLoading, failedFetch)}
      </div>
    </div>
  );
};

export default Movies;
