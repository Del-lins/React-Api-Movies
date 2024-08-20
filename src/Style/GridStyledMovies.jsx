import styled from "styled-components";

export const H2Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 1rem;

  .query_text {
    color: #f7d354;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  div {
    width: 30%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #111;
    padding: 1rem;

    & img {
      max-width: 100%;
    }

    & img,
    h2,
    p {
      margin-bottom: 1rem;
    }

    & svg {
      color: #f7d354;
    }

    & a {
      background: #f7d354;
      border: 2px solid #f7d354;
      border-radius: 4px;
      color: #000;
      padding: 1rem 0.5rem;
      align-items: center;
      transition: 0.4s;
      text-align: center;
      font-weight: bold;

      &:hover {
        background: transparent;
        color: #f7d354;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 45%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    div {
      width: 100%;
    }
  }
`;
