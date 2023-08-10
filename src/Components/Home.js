import React from 'react'
import { Politics } from './Politics'
import { Crime } from './Crime'
import { Tech } from './Tech'
import { Sports } from './Sports'
import { Cinema } from './Cinema'
import { Health } from './Health';


export const Home = () => {
  return (

    <div class="Main-Home">
      
    <Politics />
    <Crime />
    <Tech />
    <Sports />
    <Cinema />
    <Health />
   </div>
   
  )
}
