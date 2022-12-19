import styled from 'styled-components';

export const GetConnectedContainer = styled.section`
  margin-top: 7.75rem;

  .get_contnected_container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

    .hidden-bg-community {
      display: none;
    }

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

  /* Media Query */

  @media screen and (max-width: 370px) {
    .join_community_section {
      padding: 1.4375rem 1.75rem;
      padding-bottom: 4rem;
      .hidden-bg-community {
        margin-top: 1rem;
        display: block;
        margin-right: 5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 80%;
        position: relative;
        left: 3.3rem;
        bottom: -0.55rem;
        img {
          width: 150px;
          border-bottom-right-radius: 24px;
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
        right: -1px;
        max-width: 796px;
        height: calc(100% + 3.3px);

        img {
          width: 100%;
          height: 100%;
          border-radius: 24px;
        }
      }
    }
  }

  @media screen and (max-width: 895px) {
    .join_community_section {
      position: relative;
      .hidden-bg-community {
        display: block;
        margin-right: -3.81rem;
        margin-bottom: -3.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        img {
          width: 80%;
          height: 80%;
        }
      }

      .positional-images {
        display: none;
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

  @media screen and (max-width: 375px) {
    .get_contnected_container {
      padding: 2.15625rem 1.5625rem;

      width: 90%;
      .connect_exx {
        h2 {
          font-size: 1.5rem;
        }
      }
    }

    .join_community_section {
      padding: 1.4375rem 1.75rem;
      padding-bottom: 4rem;
      .hidden-bg-community {
        margin-top: 1rem;
        display: block;
        margin-right: 5rem;
        /* margin-bottom: -3.5rem; */
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 90%;
        position: relative;
        right: -3.6rem;
        bottom: -0.55rem;
        img {
          width: 150px;
          border-bottom-right-radius: 24px;
        }
      }

      .join_community_text-content {
        h2 {
          font-size: 2rem;
        }
      }
      button {
        width: 100% !important;
      }
    }
  }

  @media screen and (max-width: 315px) {
    .join_community_section {
      .hidden-bg-community {
        position: relative;

        right: 3rem;
        width: 88%;

        img {
          width: 170px;
          border-bottom-right-radius: 24px;
        }
      }
    }
  }
`;
