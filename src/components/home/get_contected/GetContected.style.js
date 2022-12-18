import styled from 'styled-components';

export const GetConnectedContainer = styled.section`
  margin-top: 7.75rem;

  .get_contnected_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 6rem;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1130px;
    background: #f6f6f6;
    border: 1px solid rgba(23, 74, 255, 0.1);
    border-radius: 20px;

    padding: 3.15625rem 4.5625rem;
    margin: 0 auto;

    .connect_exx {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      h2 {
        max-width: 373px;
        font-weight: 700;
        font-size: 2.3rem;
        letter-spacing: -0.01em;
        color: #000000;
      }

      .connect_cta {
        display: flex;
        gap: 18px;
      }
    }

    .connect_address {
      display: flex;
      flex-direction: column;
      gap: 1.6875rem;

      .connect {
        font-weight: 400;
        .placeholder {
          color: rgba(0, 0, 0, 0.6);
          margin-right: 15px;
          font-size: 1.2rem;
        }

        .placeholder_value {
          color: rgba(0, 0, 0, 1);
          font-size: 1.2rem;
        }
      }
    }
  }
`;
