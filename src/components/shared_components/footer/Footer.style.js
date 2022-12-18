import styled from 'styled-components';

export const FooterContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 3.75rem 2rem;

  .footer_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 4rem;
    align-items: flex-start;

    margin-bottom: 3rem;

    justify-items: center;

    .footer_EXX_Block {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      h3 {
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 31px;
        color: #1d2a65;
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
        color: #596780;
      }
    }

    .footer_link_section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 150%;
        text-align: justify;
        letter-spacing: -0.02em;
        color: #1a202c;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        li {
          list-style-type: none;
          a {
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
            text-align: justify;
            letter-spacing: -0.02em;
            color: #596780;
            text-decoration: none;
          }
        }
      }
    }
  }

  .footer_sub_section {
    width: 100%;

    hr {
      border: 1px solid rgba(23, 74, 255, 0.13);
      margin-bottom: 2rem;
    }

    .footer_sub_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .footer_sub_links {
        display: flex;
        align-items: center;
        gap: 3rem;

        li {
          list-style-type: none;

          a {
            font-weight: 500;
            font-size: 1rem;
            line-height: 150%;
            text-align: justify;
            letter-spacing: -0.02em;
            color: #1a202c;
            opacity: 0.6;
            text-decoration: none;
          }
        }

        li:nth-child(1)::after,
        li:nth-child(2)::after {
          position: absolute;
          content: '';
          width: 2px;
          height: 23px;
          background-color: #1a202c;
          color: #1a202c;
          opacity: 0.2;
          margin-left: 20px;
        }
      }

      .footer_sub_remark {
        font-weight: 500;
        font-size: 0.9rem;
        line-height: 150%;
        text-align: right;
        letter-spacing: -0.02em;
        color: #596780;
      }
    }
  }
`;
