import styled from 'styled-components';

export const GetConnectedContainer = styled.section`
  margin-top: 7.75rem;

  .get_contnected_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 6rem;
    justify-items: center;
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
  .list_feature_container {
    display: flex;

    margin-top: 16.5rem;
    margin-bottom: 10.5rem;

    .list_features {
      width: 95%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      align-items: center;
      justify-items: center;
      grid-gap: 8rem;

      li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        width: 80%;
        gap: 10px;

        .feature_highlight {
          font-family: 'Work Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 125%;
          color: rgba(42, 108, 249, 0.71);
        }

        h3 {
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 125%;
          color: #2c3131;
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 30px;
          color: #626262;
          flex: none;
          flex-grow: 0;
        }

        a {
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 30px;
          text-decoration-line: underline;
          color: #174aff;
        }
      }
    }
  }

  .join_community_section {
    position: relative;
    background: #000000;
    border: 1px solid rgba(23, 74, 255, 0.32);
    border-radius: 24px;
    width: 80%;
    max-width: 1129px;
    margin: 0 auto;
    color: #fff;
    padding: 3.4375rem 3.75rem;

    .join_community_text-content {
      position: relative;
      z-index: 2;
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 103.1%;
        letter-spacing: -0.035em;
        color: #ffffff;
        margin-bottom: 2.375rem;
      }

      .text-content {
        max-width: 435px;
        margin-bottom: 3.25rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 30px;
      }

      .button_text {
        order: 2;
      }
    }

    /* Positional image */
    .positional-images {
      position: absolute;
      top: 0;
      right: -2px;
      max-width: 796px;
      height: calc(100% + 2px);
      .community-image-small {
        display: none;
      }
      .community-image-big {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
    }
  }

  @media screen and (max-width: 619px) {
    .join_community_section {
      /* Positional image */
      .positional-images {
        .community-image-big {
          display: none;
          border: 2px solid green;
        }
      }
    }
  }

  @media screen and (max-width: 749px) {
    .get_contnected_container {
      width: 90%;
      padding: 3.15625rem 1.5625rem;
      .connect_exx {
        h2 {
          text-align: center;
          max-width: 100%;
        }
        .connect_cta {
          max-width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 975px) {
    .join_community_section {
      /* Positional image */
      .positional-images {
        position: absolute;
        top: -2px;
        right: -255px;
        max-width: 796px;
        height: calc(100% + 3.3px);

        img {
          width: 50%;
          height: 100%;
          border-radius: 24px;
        }
      }
    }
  }
`;
