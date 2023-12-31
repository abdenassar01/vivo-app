import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  Clickable,
  Content,
  DrawerHeader,
  DrawerWrapper,
  Icon,
  Item,
  ItemText,
  ItemsList,
  Logo,
  ProfileAvatar,
  ProfileId,
  ProfileInfo,
  ProfileName,
  ProfileWrapper,
} from "./drawer-content.style";
import { useLangStore } from "../../../../stores/lang";
import { t } from "i18next";
import { logout } from "../../../services/Auth";
import { UserAuth } from "../../../contexts/AuthContext";

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { currentLang } = useLangStore();
  const { setUser, user } = UserAuth();

  return (
    <DrawerWrapper>
      <DrawerHeader lang={currentLang}>
        <Logo source={require("../../../../assets/logo-inverted.png")} />
        <Clickable onPress={navigation.closeDrawer}>
          <Icon source={require("../../../../assets/icons/close.png")} />
        </Clickable>
      </DrawerHeader>
      <Content>
        <ProfileWrapper>
          <ProfileAvatar
            defaultSource={require("../../../../assets/images/user.png")}
            source={{ uri: user?.avatar || "https://i.imgur.com/Ag7fbTj.png" }}
          />
          <ProfileInfo>
            <ProfileName>{user?.fullname}</ProfileName>
            <ProfileId>{user?.qrId}</ProfileId>
          </ProfileInfo>
        </ProfileWrapper>
        <ItemsList>
          <Item lang={currentLang} onPress={() => navigation.navigate("Home")}>
            <Icon source={require("../../../../assets/icons/home.png")} />
            <ItemText>{t("home-nav-label")}</ItemText>
          </Item>
          <Item lang={currentLang} onPress={() => navigation.navigate("Quiz")}>
            <Icon source={require("../../../../assets/icons/quiz.png")} />
            <ItemText>{t("quiz-nav-label")}</ItemText>
          </Item>
          <Item
            lang={currentLang}
            onPress={() => navigation.navigate("Conversion")}
          >
            <Icon source={require("../../../../assets/icons/conversion.png")} />
            <ItemText>{t("conversion-nav-label")}</ItemText>
          </Item>
          <Item
            lang={currentLang}
            onPress={() => navigation.navigate("Ratings")}
          >
            <Icon source={require("../../../../assets/icons/rates.png")} />
            <ItemText>{t("evaluation-nav-label")}</ItemText>
          </Item>
          <Item
            lang={currentLang}
            onPress={() => navigation.navigate("Orders")}
          >
            <Icon source={require("../../../../assets/icons/orders.png")} />
            <ItemText>{t("demands-nav-label")}</ItemText>
          </Item>
          <Item
            lang={currentLang}
            onPress={() => navigation.navigate("Profile")}
          >
            <Icon source={require("../../../../assets/icons/profile.png")} />
            <ItemText>{t("profile-nav-label")}</ItemText>
          </Item>
        </ItemsList>
        <ItemsList>
          <Item
            lang={currentLang}
            onPress={async () => {
              setUser(null);
              await logout();
              setUser(null);
            }}
          >
            <Icon source={require("../../../../assets/icons/logout.png")} />
            <ItemText>{t("logout-nav-label")}</ItemText>
          </Item>
        </ItemsList>
      </Content>
    </DrawerWrapper>
  );
};

export default DrawerContent;
