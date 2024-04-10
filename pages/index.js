import styled, { css } from "styled-components";
import Button, { test, test3 } from "../components/Button";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary operator</h2>
      <StyledWrapper>
        <Button>Button</Button>
        <Button $color="danger">Button - Danger</Button>
      </StyledWrapper>

      <h2>Using Props: css block / Complex Component</h2>
      <StyledWrapper>
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </StyledWrapper>
    </div>
  );
}
