import React from "react";
export default function Referrals() {

const [open, setOpen] = React.useState(false);
 
const toggle = () => {
    setOpen(!open);
  };

    return (
       <main>
         <div className="contentblock">
        <div className="ReferralsHeader"><button type="button" className="collapsible" onClick={toggle}><span className="headertitle">Referral Links</span></button></div>
        {open && (
            <div className="links">
             <ul>
                <li><p><a href="https://rollercoin.com/?r=kuzpiawb">RollerCoin</a><br/>Sign up for this crypto mining simulation game and we both get a bonus!</p></li>
                <li><p><a href="https://app.gala.games?source=gala&referralCode=5fe0a087d1633b5861e5eb57">Gala Games</a><br/>gala games is building a few interesting blockchain-based games.</p></li>
                <li><p><a href="https://r.upland.me/wirq">Upland</a><br/>A real-world real-estate game. If you use this link, Upland will award you with a bonus for your first purchase.</p></li>
                <li><p><a href="https://dogemongo.com/ref/594CRcVRHeR8LQ2g9">Dogemon-Go</a><br/>Dogemon go is a clear pokemon-go rip-off. Fun to play though and makes a little coin.</p></li>
             </ul>
        </div>
      )}
           
           </div>
        
         </main>
         )
    }