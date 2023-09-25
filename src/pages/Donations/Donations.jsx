import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";
import Swal from "sweetalert2";

const Donations = () => {

    const donations = JSON.parse( localStorage.getItem('donation'))

    const [isSeeAll, setSeeAll] = useState(false);

    useEffect(() => {
        if (!donations) {
          Swal.fire('You have not Donated yet');
        }
      }, [donations]);
    
    return (
        <div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16 mb-7">
            {
                donations ?  isSeeAll ? (donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)) : (donations?.slice(0,4).map(donation => <Donation key={donation.id} donation={donation}></Donation>)): ""
              
            }
        </div>
        <div className="text-center mb-8">
            {
               donations ? donations.length > 4 &&(isSeeAll ? <button className="bg-red-300 px-2 py-1 rounded-lg" onClick={()=> setSeeAll(!isSeeAll)}>See less</button>: <button className="bg-green-300 px-2 py-1 rounded-lg " onClick={()=>setSeeAll(!isSeeAll)}>See All</button> ) :""
            }
            </div>
            
        </div>
    );
};

export default Donations;