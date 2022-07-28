import Button from "./Button";
import {
  MainContainer,
  InnerContaier,
  StyledButton,
  StyledBtn,
} from "./library";

const MainSection = () => {
  return (
    <MainContainer>
      <InnerContaier>
        <p>Button Fist Approach</p>
        <StyledButton>Hello</StyledButton>
        <StyledButton variant="secondary">Hello</StyledButton>
        <StyledButton variant="tertiary">Hello</StyledButton>
        <InnerContaier>
          <Button />
        </InnerContaier>
      </InnerContaier>
      <InnerContaier>
        <p>Button second approach</p>
        <StyledBtn>Hello</StyledBtn>
        <StyledBtn variant="secondary">Hello</StyledBtn>
        <StyledBtn variant="tertiary">Hello</StyledBtn>
        <InnerContaier>
          <Button second />
        </InnerContaier>
      </InnerContaier>
    </MainContainer>
  );
};

export default MainSection;
