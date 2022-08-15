import { Copy } from "phosphor-react";
import {
  CardGroupBarProgressContainer,
  CardGroupBarProgressInfo,
  CardGroupCode,
  CardGroupContainer,
  CardGroupDateCreate,
  CardGroupFooter,
  CardGroupHeader,
  CardGroupTitle,
  CardGroupUsersAvatar,
} from "./styles";
import avatarImg from "../../../../assets/images/avatar.jpg";
import ProgressBar from "../ProgressBar";

export default function CardGroup() {
  return (
    <CardGroupContainer>
      <CardGroupHeader>
        <CardGroupTitle>Compras do Mês</CardGroupTitle>
        <CardGroupDateCreate>17/06/2022</CardGroupDateCreate>
      </CardGroupHeader>
      <CardGroupCode>
        <span>FHG13E</span>
        <Copy size={15} />
      </CardGroupCode>
      <CardGroupUsersAvatar>
        <img src={avatarImg} />
        <img src={avatarImg} />
        <img src={avatarImg} />
        <img src={avatarImg} />
      </CardGroupUsersAvatar>
      <CardGroupBarProgressContainer>
        <CardGroupBarProgressInfo>
          <span>R$ 645,00</span>
          <span>R$ 600,00</span>
        </CardGroupBarProgressInfo>
        <ProgressBar />
      </CardGroupBarProgressContainer>
      <CardGroupFooter>
        <span>Vence em 22/05/2022</span>
      </CardGroupFooter>
    </CardGroupContainer>
  );
}
