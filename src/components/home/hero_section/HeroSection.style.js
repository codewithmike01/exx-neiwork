import styled from 'styled-components';

export const HeroContainer = styled.section`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .hero_header {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    letter-spacing: -0.05em;

    .hero_section_text_higlight {
      color: var(--primaryColor);
      margin-left: 10px;
      font-weight: 700;
      line-height: 94px;
    }
  }

  .hero_text {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.6);
    max-width: 489px;
    align-self: center;
    text-align: center;
  }

  .hero_cta {
    display: flex;
    gap: 1.1rem;
    align-self: center;
  }

  .hero_doc_preview {
    margin-top: 3rem;
    align-self: center;
    max-width: 930px;
    height: 480.56px;
    img {
      width: 100%;
    }
  }

  .hero_quick-show {
    margin-top: -10rem;
    padding: 3rem 0;
    background-color: var(--textColor);
    display: flex;
    align-items: center;
    justify-content: center;

    .quick_show_list {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      align-items: center;
      justify-items: center;
      grid-gap: 5.1875rem;

      li {
        list-style-type: style none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          .text-link {
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 24px;
            color: #fff;
          }
          svg {
            color: #fff;
            font-size: 1.1rem;
          }
        }

        .text-decribe {
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 20px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .hero_header {
      padding: 0 1px;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 375px) {
    .hero_text {
      padding: 0 1rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 749px) {
    .hero_header {
      font-size: 2.5rem;
    }

    .hero_cta {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;
