import React from "react";

import Card from "../../Card";
import { SendButton } from "../buttons";
import css from "./style.module.pcss";
import { Props } from "./types";

const CommentForm: Props = ({ value, onChange, errors }) => {
  return (
    <Card className={css.form}>
      <input
        placeholder="Comment..."
        className={`${css.input} ${errors.length ? css.input_error : ""}`}
        onChange={onChange}
        value={value}
      />
      <SendButton />
    </Card>
  );
};

export default CommentForm;
