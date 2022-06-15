import React from 'react';

const Profile = ({
  data: { name, loclevel3Name, loclevel2Name, language },
  modal,
}) => {
  return (
    <div className='container'>
      <div className='profile-container'>
        <div className='profile-info'>
          <div className='profile-dp'>
            <img
              src='https://app.gramoday.net/static/media/defaultUserDp.3e1b0347.svg'
              alt=''
              height='90'
            />
          </div>

          <div className='profile-details'>
            <h3>{name}</h3>
            <p>
              {loclevel3Name},{loclevel2Name}
            </p>
            <i>Speaks {language === 'en' ? 'English' : 'Hindi'}</i>
            <div className='buttons'>
              <button
                className='btn connect-btn'
                onClick={() => {
                  modal(true);
                }}
              >
                <i className='fa-solid fa-user-plus'></i> Connect
              </button>
              <button
                className='btn contact-btn'
                onClick={() => {
                  modal(true);
                }}
              >
                <i className='fa-solid fa-phone'></i> Contact
              </button>
            </div>
          </div>
        </div>
        <button className='profile-share'>
          <p>
            <i className='fa-brands fa-whatsapp'></i>
          </p>

          <p> &nbsp;Share</p>
        </button>
      </div>
    </div>
  );
};

export default Profile;
