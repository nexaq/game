import Footer from "client/components/Footer";
import Header from "client/components/Header";
import useAuth from "client/hooks/useAuth";
import useFakeLoading from "client/hooks/useFakeLoading";
import React from "react";

import useIsAuth from "../../hooks/useIsAuth";
import Container from "../Container";
import Loading from "../Loading";
import Spacing from "../Spacing";
import Title from "./components/Title";
import css from "./style.module.pcss";
import { Props } from "./types";

const Layout: Props = ({
  children,
  fakeLoading = false,
  headerOverlapsContent = false,
  title,
  mustBeAuthorized = false,
}) => {
  const isFakeLoading = fakeLoading ? useFakeLoading() : false;
  const isLoadingClassName = isFakeLoading ? css._isLoading : "";
  const headerOverlapsClassName = headerOverlapsContent
    ? ""
    : css.headerOverlap;

  // Memoize children
  // let childrenMemoized;
  // if (memoizeChildrenBy !== undefined) {
  //     childrenMemoized = useMemo(() => children, memoizeChildrenBy);
  // }

  let isAuth: boolean | null = null;
  if (mustBeAuthorized) {
    useAuth(true);
    isAuth = useIsAuth();
  }

  const showAuthLoading = mustBeAuthorized && isAuth === null;
  const showContent =
    !mustBeAuthorized || (mustBeAuthorized && isAuth === true);

  return (
    <div
      className={`${css.layout} ${isLoadingClassName} ${headerOverlapsClassName}`}
    >
      <div className={css.minHeight}>
        {!isFakeLoading && <Header />}

        {showAuthLoading && (
          <Container>
            <Spacing size="lg" />
            <Loading delay={300} />
          </Container>
        )}

        {showContent && (
          <>
            {title && <Title title={title} />}
            {children}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
