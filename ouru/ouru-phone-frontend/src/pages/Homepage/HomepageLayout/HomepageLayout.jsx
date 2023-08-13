import React from 'react'
import BannerHomePage from '../../../components/Banner/BannerHomePage'
import ProfileDetails from '../../../components/ProfileDetails/ProfileDetails'

function HomepageLayout() {
  return (
    <div className='min-w-full'>
      {/* bg-banner z-0*/}
        <BannerHomePage/>
        <ProfileDetails></ProfileDetails>
      {/* div - all ingridiance - components - z-10 -position-absooulate*/}
    </div>
  )
}

export default HomepageLayout
