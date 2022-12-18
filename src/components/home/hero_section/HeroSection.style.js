import styled from 'styled-components';

export const HeroContainer = styled.section`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .hero_header {
    font-weight: 700;
    font-size: 3rem;
    line-height: 94px;
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
`;
