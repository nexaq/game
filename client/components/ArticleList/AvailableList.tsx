import Grid from "client/components/Grid";
import React from "react";
import { v4 as id } from "uuid";

import ArticleItem from "../ArticleItem";
import { Props } from "./types";

const AvailableList: Props = ({ children: items, className = "" }) => {
  return (
    <Grid
      cols={1}
      rowGap={60}
      rowGapSm={64}
      rowGapMd={120}
      className={className}
    >
      {items.map(({ title, description, name, imageSource, comingSoon }) => {
        return (
          <ArticleItem
            imageSource={imageSource}
            title={title}
            name={name}
            key={id()}
            comingSoon={comingSoon}
          >
            {description}
          </ArticleItem>
        );
      })}
    </Grid>
  );
};

export default AvailableList;
