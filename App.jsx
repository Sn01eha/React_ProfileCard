import React, { useState } from "react"; 
import "./index.css"; 
import hyunjinImage from "./hyunjin.jpg"; // Use relative path if possible 
const ProfileCard = ({ name, bio, initialBg }) => { 
  const [bg, setBg] = useState(initialBg); 
    return ( 
      <div 
        className="profile-card" 
        style={{ background: bg }} 
        onMouseEnter={() => setBg("linear-gradient(135deg, #FFD700, #FFA07A)")} 
        onMouseLeave={() => setBg(initialBg)} 
      > 
        <img src={hyunjinImage} alt={name} className="profile-pic" /> 
        <h2 className="profile-name">{name}</h2> 
        <p className="profile-bio">{bio}</p> 
      </div> 
    ); 
}; 
 
const App = () => ( 
  <div className="app-container"> 
    <ProfileCard 
      name="Arijit Singh" 
      bio="Famous Korean singer from boy-band group called Stray-kidz ." 
      initialBg="linear-gradient(135deg, #ADD8E6, #E6E6FA)" 
    /> 
  </div> 
); 
 
export default App;