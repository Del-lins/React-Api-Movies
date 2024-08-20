import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #121212;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  h2 a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 28px;

      a {
        padding: 0 0 1rem;
      }
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
  }

  input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
    outline: none;
  }

  button {
    background: #f7d354;
    border: 2px solid #f7d354;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.3rem;
    transition: 0.4s;

    &:hover {
      background: transparent;
      color: #f7d354;
    }
  }
`;
