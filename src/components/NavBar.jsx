import { MenuContainter, NavBar as StyledNavBar } from "./library";

const NavBar = () => {
  return (
    <StyledNavBar>
      <p>Logo</p>
      <MenuContainter>
        {[...Array(5)].map((_, idx) => (
          <li key={idx}>{`Item ${idx + 1}`}</li>
        ))}
      </MenuContainter>
    </StyledNavBar>
  );
};

export default NavBar;
