import Container from "client/components/Container";
import Layout from "client/components/Layout";
import React from "react";
import { Helmet } from "react-helmet";

import SignUpForm from "./components/SignUpForm";
import css from "./style.module.pcss";
import { Props } from "./types";

const SignUp: Props = () => {
  return (
    <>
      <Helmet>
        <title>SIGN UP</title>
      </Helmet>
      <Layout>
        <Container>
          <div className={css.login}>
            <div className={css.inner}>
              <h1 className={css.title}>
                WORLD <br />
                OF STARSHIP
              </h1>
              <div
                style={{
                  maxWidth: "400px",
                }}
              >
                <SignUpForm />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default SignUp;
