import React from 'react';
import { ExxUpdateContainer } from './ExxUpdate.style';
import BlogOne from '../../../assets/images/update_one.svg';
import BlogTwo from '../../../assets/images/update_two.svg';
import BlogThree from '../../../assets/images/update_three.svg';
import ButtonBlueBg from '../../shared_components/buttons/ButtonBlueBg';
import { FiArrowUpRight } from 'react-icons/fi';

const ExxUpdate = () => {
  const blogPost = [
    {
      id: 1,
      type: 'Blockchain tips',
      date: 'March 27, 2022',
      title: 'The design language of the Cross Chain- pekele pekele',
      image: `${BlogTwo}`,
    },
    {
      id: 2,
      type: 'Blockchain tips',
      date: 'March 27, 2022',
      title: 'The design language of the Cross Chain- pekele pekele',
      image: `${BlogOne}`,
    },
    {
      id: 3,
      type: 'Blockchain tips',
      date: 'March 27, 2022',
      title: 'The design language of the Cross Chain- pekele pekele',
      image: `${BlogThree}`,
    },
  ];
  return (
    <ExxUpdateContainer>
      <section className="exx_update_wrapper">
        <h2 className="exx_update_header">Exx Updates</h2>

        <p className="exx_update_text">
          Catch up with news, blog posts, events and other happenings within the
          EXX ecosystem.
        </p>
        <section className="exx_update_card_container">
          {blogPost.map(({ id, title, date, type, image }) => (
            <div className="card_container" key={id}>
              <div className="card_header">
                <h4>{type}</h4>
                <span className="card_date">{date}</span>
              </div>
              <h2>{title}</h2>

              <div className="card_img_container">
                <img src={`${image}`} alt="Blog piture " />
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="stay_updated_section">
        <div className="stay_updated_wrapper">
          <div className="stay_updated_content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter. We only send important updates.</p>
          </div>

          <div className="subscription">
            <form className="subscription_form">
              <input
                type="email"
                nmae="email"
                placeholder="Your email address"
                required
                className="stay_updated_input"
              />
              <ButtonBlueBg
                text="Subscribe Now"
                width="10.4375rem"
                func={() => {}}
                type="submit"
                icon={<FiArrowUpRight />}
              />
            </form>
          </div>
        </div>
      </section>
    </ExxUpdateContainer>
  );
};

export default ExxUpdate;
