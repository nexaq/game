import React from 'react';
import {Props} from "./types";
import Grid from "client/components/Grid";

const Comments: Props = ({children}) => {
    return (
        <Grid cols={1} rowGap={32}>
            {children}
        </Grid>
    );
};

export default Comments;
