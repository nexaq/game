import React from 'react';
import {Props} from "./types";
import ArticleItem from "../ArticleItem";
import {v4 as id} from 'uuid';
import Grid from "client/components/Grid";

let AvailableList: Props = ({children: items, className = ''}) => {
    return (
        <Grid cols={1} rowGap={60} rowGapSm={64} rowGapMd={120} className={className}>
            {items.map(({title, description, name, imageSource}) => {
                return <ArticleItem
                    imageSource={imageSource}
                    title={title}
                    name={name}
                    key={id()}
                >{description}</ArticleItem>
            })}
        </Grid>
    );
};

export default AvailableList;