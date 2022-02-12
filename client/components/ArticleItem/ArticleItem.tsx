import Heading from "client/components/@typography";
import Paragraph from "client/components/@typography/Paragraph";
import LinkButton from "client/components/Button";
import { ROUTES } from "client/routes";
import React from "react";

import css from "./style.module.pcss";
import { Props } from "./types";

const ArticleItem: Props = ({
  name,
  title,
  children,
  className = "",
  imageSource,
  comingSoon = false,
}) => {
  const textContent = (
    <>
      <div className={css.badge}>{name}</div>
      <Heading level="h3" className={css.title}>
        {title}
      </Heading>
      <Paragraph size="lg" style={{ marginBottom: "48px" }}>
        {children}
      </Paragraph>
      <LinkButton url={ROUTES.PLAY.INDEX}>play now</LinkButton>
    </>
  );

  return (
    <div className={`${css.item} ${className}`}>
      <div className={css.text}>
        <div className={css.sticky}>{textContent}</div>
      </div>
      <div className={`${css.imageContainer}`}>
        {comingSoon && (
          <div className={css.imageContainer__comingSoon}>Coming soon</div>
        )}
        <img
          src={imageSource}
          className={`${css.image} 
                    ${comingSoon ? css.image_comingSoon : ""}`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default ArticleItem;
