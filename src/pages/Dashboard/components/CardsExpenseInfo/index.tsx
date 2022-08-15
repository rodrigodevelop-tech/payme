import {
  DashboardCardItem,
  DashboardCardItemAmount,
  DashboardCardItemDescription,
  DashboardCardItemIcon,
  DashboardCardItemTitle,
} from "./styles";

interface CardsProps {
  title: string;
  amount: string;
  icon?: string;
}

export function CardsExpenseInfo({ title, amount, icon }: CardsProps) {
  return (
    <DashboardCardItem>
      <DashboardCardItemDescription>
        <DashboardCardItemTitle>{title}</DashboardCardItemTitle>
        <DashboardCardItemAmount>{amount}</DashboardCardItemAmount>
      </DashboardCardItemDescription>
      <DashboardCardItemIcon src={icon} alt="" />
    </DashboardCardItem>
  );
}
