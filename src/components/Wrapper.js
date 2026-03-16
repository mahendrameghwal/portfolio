import React from 'react';
import PersonalInfo from './PersonalInfo';
import Details from './Details';
const Wrapper = () => {
  return (
    <div className='main'>
      <section className='content-wrapper'>


        <PersonalInfo />
        <Details />
      </section>
    </div>
  )
}

export default Wrapper