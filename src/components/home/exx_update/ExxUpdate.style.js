import styled from 'styled-components';

export const ExxUpdateContainer = styled.section`
  width: 100%;
  .exx_update_wrapper {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 14.8125rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .exx_update_header {
      font-weight: 700;
      font-size: 2.3rem;
      line-height: 40px;
      color: #141830;
    }

    .exx_update_text {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 30px;
      color: #626262;
      max-width: 490px;
    }

    .exx_update_card_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      grid-gap: 1.1rem;

      .card_container {
        background: #f5f5f5;
        border-radius: 20px;
        padding-top: 1.2rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        .card_header {
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
        }

        h2 {
          padding: 0 1rem;
          font-style: normal;
          font-weight: 700;
          font-size: 1.5rem;
          color: #141830;
          margin-bottom: 1.2rem;
          line-height: 34px;
        }

        .card_img_container {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .stay_updated_section {
    margin-top: 8.75rem;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    .stay_updated_wrapper {
      padding: 5.5rem 0;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;

      .stay_updated_content {
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
          font-weight: 700;
          font-size: 3rem;
          line-height: 80px;
        }

        p {
          font-weight: 500;
          font-size: 1.3rem;
          line-height: 32px;
          max-width: 458px;
        }
      }

      /* SubScription  Section */
      .subscription {
        .subscription_form {
          display: flex;
          gap: 1rem;

          .stay_updated_input {
            background: #000000;
            border: 1.03958px solid rgba(255, 255, 255, 0.48);
            border-radius: 10px;
            padding: 1.0625rem;
            padding-left: 1.8125rem;

            width: 456px;

            &::placeholder {
              font-weight: 400;
              font-size: 0.9rem;
              line-height: 21px;
              color: #ffffff;
            }

            &:focus {
              outline: 2px solid var(--primaryColor);
            }
          }
        }
      }
    }
  }
`;
