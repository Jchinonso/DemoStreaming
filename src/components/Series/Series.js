import React, { useEffect, useState } from "react";
import List from "../Common/List";
import ImageItem from "../Common/ImageItem";
import useGetEntries from "../../action/useGetEntries";
import entriesReducer from "../../reducers/entriesReducer";
import PageHeader from "../Common/PageHeader";
import "./Series.css";

const Series = () => {
  const { state, getEntries } = useGetEntries(entriesReducer, { entries: [] });
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
  }, [getEntries]);

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
        return entry.programType === "series";
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
      <PageHeader title={"Popular Series"} />
      <div className="movies-main">
        {showList(state, isLoading, failedFetch)}
      </div>
    </div>
  );
};

export default Series;