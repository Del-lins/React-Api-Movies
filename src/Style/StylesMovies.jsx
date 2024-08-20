import styled from "styled-components";

export const MoviePage = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;

  & svg {
    font-size: 1.5rem;
    color: #f7d354;
  }

  .MovieTitle {
    text-align: center;
  }

  .MovieTitle img,
  .MovieTitle h2,
  .MovieTitle p {
    margin-bottom: 1rem;
  }

  .MovieTitle h2 {
    font-size: 2rem;
  }

  .MovieTitle p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .slogan {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  div {
    margin-bottom: 1.5rem;

    & h3 {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .description {
      line-height: 1.4rem;
      letter-spacing: 1px;
    }
  }

  .info {
    padding-bottom: 10rem;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 1rem auto;

    .MovieTitle img {
      width: 85%;
    }

    .MovieTitle h2 {
      font-size: 1.5rem;
    }

    .slogan {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }

    div {
      & h3 {
        font-size: 1.2rem;
      }

      .description {
        font-size: 0.9rem;
        line-height: 1.2rem;
      }
    }

    .info {
      padding-bottom: 5rem;
    }
  }

  @media (max-width: 480px) {
    .MovieTitle h2 {
      font-size: 1.2rem;
    }

    .slogan {
      font-size: 1rem;
    }

    div {
      & h3 {
        font-size: 1rem;
      }

      .description {
        font-size: 0.8rem;
      }
    }
  }
`;
