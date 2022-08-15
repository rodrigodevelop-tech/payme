import styled from "styled-components";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export const ProgressBarContainer = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors["green-800"]};
  border-radius: 99999px;
  width: 100%;
  height: 7px;

  transform: translate(0);
`;

export const ProgressBarIndicator = styled(ProgressPrimitive.Indicator)`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;
