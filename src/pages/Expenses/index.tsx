import { Copy } from "phosphor-react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { SelectStyled } from "../Dashboard/components/SelectStyled";
import {
  CardInfoPaying,
  CardInfoPayingContainer,
  CardInfoPayingPix,
  CardInfoPayingTitle,
  ExpensesAmount,
  ExpensesContainer,
  ExpensesContent,
  ExpensesGroup,
  ExpensesHeader,
  GroupAndExpenses,
} from "./styles";
import peopleGroup from "../../assets/icons/people-group.svg";
import payAvatar from "../../assets/images/avatar.jpg";
import CardPaying from "./components/CardPaying";

const EXPENSES = [
  {
    id: "1",
    value: "Compra de Junho",
    text: "Compra de Junho",
  },
  {
    id: "2",
    value: "Compra de Julho",
    text: "Compra de Julho",
  },
  {
    id: "3",
    value: "Compra de Agosto",
    text: "Compra de Agosto",
  },
];

export default function Expenses() {
  return (
    <ExpensesContainer>
      <Header
        title="Despesas"
        button={<Button color="#F2994A">Finalizar Despesa</Button>}
      />
      <ExpensesHeader>
        <GroupAndExpenses>
          <ExpensesGroup>
            <img src={peopleGroup} alt="" />
            <span>Lá Casa</span>
          </ExpensesGroup>
          <SelectStyled placeHolder="Selecione a despesa" items={EXPENSES} />
        </GroupAndExpenses>

        <CardInfoPayingContainer>
          <CardInfoPayingTitle>
            <span>Pagante</span>
          </CardInfoPayingTitle>
          <CardInfoPaying>
            <CardInfoPayingPix>
              <span>Rodrigo Alves Sousa</span>
              <span>PIX: 076.640.945-77</span>
            </CardInfoPayingPix>
            <img src={payAvatar} />
          </CardInfoPaying>
        </CardInfoPayingContainer>
      </ExpensesHeader>
      <ExpensesAmount>
        <span>Total: R$ 645,00</span>
        <p>Vence em 22/05/2022</p>
      </ExpensesAmount>
      <ExpensesContent>
        <CardPaying />
        <CardPaying />
        <CardPaying />
      </ExpensesContent>
    </ExpensesContainer>
  );
}
