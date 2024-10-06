import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddButtonInterview from './_component/AddButtonInterview'
import AIAddNew from './_component/AIAddNew'
import AddNewInterview from './_component/newButton'
import InterviewList from './_component/InterviewList'






function Dashboard() {
  return (
    <div>
      
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-grey-500'>craete and start your AI Mockucp Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
  
       <AddButtonInterview></AddButtonInterview>
       <AIAddNew></AIAddNew>
       <AddNewInterview></AddNewInterview>
       
     
          
        </div>
      <InterviewList></InterviewList>

    </div>
   
  )
}

export default Dashboard