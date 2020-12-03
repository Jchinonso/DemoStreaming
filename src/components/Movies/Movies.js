import React from "react";
import List from "../Common/List";
import ImageItem from "../Common/ImageItem";
import useFetchApi from "../../Hooks/useFetchApi";
import PageHeader from "../Common/PageHeader";
import "./Movies.css";

const Movies = () => {
  const { isLoading, failedFetch, state } = useFetchApi();

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
