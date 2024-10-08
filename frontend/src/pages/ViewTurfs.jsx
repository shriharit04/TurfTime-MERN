import React, { useState,useEffect } from 'react'
import TurfDetailsCard from '../components/TurfDetailsCard'


function ViewTurfs() {
    const [turfs, setTurfs] = useState([])
    useEffect(() => {
        const fetchTurfs = async () => {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}guest/view/turfs`,{
            // headers: {
            //   'Authorization': `Bearer ${user.token}`
            // }
          })
          const json = await response.json()
        
          if (response.ok) {
            // dispatch({type: 'SET_WORKOUTS', payload: json})
            setTurfs(json)
          }
        }
        if(1){
          fetchTurfs()
        }
      }, [])


      return (
        <div className="flex justify-center gap-6 items-center h-screen flex-col md:flex-row">
          {turfs && turfs.map(turf => (
            <TurfDetailsCard  key={turf._id} turf={turf}/>
          ))}
        </div>
      );
      
}

export default ViewTurfs
