import {
  CardPayingAvatar,
  CardPayingContainer,
  CardPayingHeader,
  CardPayingName,
  CardPayingProgressPayment,
  CardPayingStatus,
  CardPayingStatusPayment,
} from "./styles";
import avatarImg from "../../../../assets/images/avatar.jpg";
import ProgressBar from "../../../../components/ProgressBar";

export default function CardPaying() {
  return (
    <CardPayingContainer>
      <CardPayingHeader>
        <CardPayingAvatar status="GOOD">
          <img src={avatarImg} alt="" />
        </CardPayingAvatar>
        <CardPayingName>Allan Alves</CardPayingName>
      </CardPayingHeader>
      <CardPayingStatus status="GOOD">BOM PAGADOR</CardPayingStatus>
      <CardPayingStatusPayment>
        <span>
          Pagou <strong>R$ 100,00</strong>
        </span>
        <br></br>
        <span>
          de <strong>R$ 100,00</strong>
        </span>
      </CardPayingStatusPayment>
      <CardPayingProgressPayment>
        <ProgressBar value={66} />
        <span>Pagou em 22/05/2022</span>
      </CardPayingProgressPayment>
    </CardPayingContainer>
  );
}
