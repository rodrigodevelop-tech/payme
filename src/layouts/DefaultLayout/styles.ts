import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 17.375rem 1fr;
  /* display: flex; */
`;

export const LayoutContent = styled.div`
  position: absolute;
  height: 100%;

  left: 17.375rem;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 3.375rem 2.375rem;
`;
