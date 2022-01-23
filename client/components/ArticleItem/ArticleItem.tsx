import React from 'react';
import {Props} from "./types";
import css from './style.module.pcss';
import Heading from "client/components/typography";
import Paragraph from "client/components/typography/Paragraph";
import LinkButton from "client/components/Button";
import {ROUTES} from "client/routes";

let ArticleItem: Props = ({
                              name,
                              title,
                              children,
                              className = '',
                              imageSource
                          }) => {

    const textContent = (<>
        <div className={css.badge}>{name}</div>
        <Heading level={'h3'} className={css.title}>{title}</Heading>
        <Paragraph size={'lg'} style={{marginBottom: '48px'}}>{children}</Paragraph>
        <LinkButton url={ROUTES.PLAY.INDEX}>play now</LinkButton>
    </>);

    const image = <img src={imageSource} className={css.image} alt=""/>;

    return (
        <div className={`${css.item} ${className}`}>
            <div className={css.text}>
                <div className={css.sticky}>
                    {textContent}
                </div>
            </div>
            {image}
        </div>
    );
};

export default ArticleItem;