import styled from 'styled-components';

export const DeployDappContainer = styled.section`
  background-color: var(--primaryColor);
  width: 100%;
  padding-top: 5.0625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.06rem;

  .deploy_header {
    font-weight: 700;
    font-size: 3rem;
    line-height: 54px;
    color: #fff;
    text-align: center;
    letter-spacing: -0.01em;
  }

  .deploy_card {
    padding: 29px 27px;
    background: #ffffff;
    box-shadow: 0px 4px 42px rgba(0, 0, 0, 0.1);
    border-radius: 19px;
    padding: 3.5rem 2.5rem 0rem 2.5rem;
    width: 90%;
    margin-bottom: -2rem;

    .deploy_card_list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;

      li {
        list-style: none;
        height: 274px;

        h3 {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 34px;
          color: #333333;
          margin-top: 16px;
          margin-bottom: 20px;
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 30px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  /* Media Query */
  @media screen and (max-width: 375px) {
    .deploy_header {
      padding: 0 1rem;
      font-size: 2rem;
      text-align: left;
    }

    .deploy_card {
      padding: 3.5rem 1rem 0rem 1rem;
      .deploy_card_list {
        li {
          h3 {
            font-size: 1.2rem;
          }
          p {
            width: 240px;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 749px) {
    .deploy_header {
      font-size: 2.5rem;
    }
  }
`;
