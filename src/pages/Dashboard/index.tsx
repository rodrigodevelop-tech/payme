import Header from "../../components/Header";
import { CardsExpenseInfo } from "./components/CardsExpenseInfo";
import {
  DashboardCards,
  DashboardCardsGroupContainer,
  DashboardContainer,
  DashboardContent,
  DashboardContentHeader,
  DashboardLineDivider,
} from "./styles";
import owingIcon from "../../assets/icons/owing.svg";
import overdueIcon from "../../assets/icons/overdue.svg";
import toReceiveIcon from "../../assets/icons/toReceive.svg";
import Button from "../../components/Button";
import SelectGroup from "./components/SelectGroup";
import CardGroup from "./components/CardGroup";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <DashboardCards>
        <CardsExpenseInfo title="Devendo" amount="R$ 120,00" icon={owingIcon} />
        <CardsExpenseInfo
          title="A Receber"
          amount="R$ 120,00"
          icon={overdueIcon}
        />
        <CardsExpenseInfo
          title="Em atraso"
          amount="R$ 120,00"
          icon={toReceiveIcon}
        />
        <CardsExpenseInfo title="Total gastos - Junho" amount="R$ 120,00" />
      </DashboardCards>
      <DashboardLineDivider />
      <DashboardContent>
        <DashboardContentHeader>
          <SelectGroup />
          <Button color="#EB5757">Inserir despesa</Button>
        </DashboardContentHeader>
        <DashboardCardsGroupContainer>
          <CardGroup />
          <CardGroup />
          <CardGroup />
          <CardGroup />
          <CardGroup />
        </DashboardCardsGroupContainer>
      </DashboardContent>
    </DashboardContainer>
  );
}
