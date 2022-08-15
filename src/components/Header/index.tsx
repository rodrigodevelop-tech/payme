import {
  HeaderAvatar,
  HeaderContainer,
  HeaderContent,
  HeaderNotifications,
  HeaderTitle,
} from "./styles";
import notificationIcon from "../../assets/icons/notification.svg";
import avatarImg from "../../assets/images/avatar.jpg";
import { ReactElement, useState } from "react";
import Modal from "../Modal";

interface HeaderProps {
  title: string;
  button?: ReactElement;
}

export default function Header({ title, button }: HeaderProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderContent>
        <HeaderNotifications>
          <img
            src={notificationIcon}
            alt="Imagem ilustrando quantidade de notificações"
          />
        </HeaderNotifications>
        <HeaderAvatar src={avatarImg} alt="Imagem de perfil" />
        <div onClick={() => setOpenModal(true)}>{button}</div>
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      </HeaderContent>
    </HeaderContainer>
  );
}
