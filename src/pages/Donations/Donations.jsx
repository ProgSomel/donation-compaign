import { useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {

    const donations = JSON.parse( localStorage.getItem('donation'))

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
            {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            }
        </div>
    );
};

export default Donations;