import {
  HeaderAvatar,
  HeaderContainer,
  HeaderContent,
  HeaderNotifications,
  HeaderTitle,
} from "./styles";
import notificationIcon from "../../assets/icons/notification.svg";
import avatarImg from "../../assets/images/avatar.jpg";
import Button from "../Button";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Dashboard</HeaderTitle>
      <HeaderContent>
        <HeaderNotifications>
          <img
            src={notificationIcon}
            alt="Imagem ilustrando quantidade de notificações"
          />
        </HeaderNotifications>
        <HeaderAvatar src={avatarImg} alt="Imagem de perfil" />
        <Button color="#51de9a">Criar grupo</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
