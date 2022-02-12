import Avatar from "client/components/Avatar";
import Container from "client/components/Container";
import Layout from "client/components/Layout";
import Spacing from "client/components/Spacing";
import React from "react";
import { Helmet } from "react-helmet";
import utils from "styles/utils.module.pcss";

import avatarFileToSrc from "../../helpers/avatarFileToSrc";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { userSelector } from "../../reducers/user/selectors";
import AvatarUploadButton from "./components/AvatarUploadButton/AvatarUploadButton";
import ProfileForm from "./components/UserForm";
import css from "./style.module.pcss";
import { Props } from "./types";

const Profile: Props = () => {
  const userFromRedux = useTypedSelector(userSelector);
  const avatarSrc = avatarFileToSrc(userFromRedux?.avatar);

  return (
    <>
      <Helmet>
        <title>PROFILE</title>
      </Helmet>
      <Layout title="Profile" mustBeAuthorized>
        <Container>
          <div className={css.profile}>
            <div
              className={`${utils.dFlex} ${utils.directionColumn} ${utils.flexAlignCenter} ${css.editProfile}`}
            >
              <Avatar src={avatarSrc} size="xl" />
              <Spacing size="sm" />
              <AvatarUploadButton />
            </div>
            <div className={css.info}>
              <ProfileForm />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
