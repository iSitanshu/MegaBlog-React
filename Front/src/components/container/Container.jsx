// Accept Properties as a children it is simply a box with has 
// height and width and some styling properties - in reaact and next js

import React from 'react'

function Container({children}){
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container