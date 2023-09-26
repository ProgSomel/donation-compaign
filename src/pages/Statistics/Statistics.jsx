import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell} from 'recharts';


const COLORS = [ `#00C49F`, "#FF444A"]

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {

  const [myDonationPercentage, setMyDonationPercentage] = useState(0);
  const [myTotalDonationPercentage, setTotalDonationPercentage] = useState(100);


  useEffect(() => {
    const getItemsFromLocalStorage = JSON.parse(localStorage.getItem('donation'));
    let myDonationLength =0;
    if(getItemsFromLocalStorage) {
      myDonationLength = getItemsFromLocalStorage.length;
    }

    let newMyDonationLengthPercentage = ((myDonationLength / 12) * 100);

    let newMyDonationLengthPercentageFloat = parseFloat(newMyDonationLengthPercentage.toFixed(1));
    console.log(newMyDonationLengthPercentageFloat);
    

 
      let newTotalDonationPercentage = 100 - newMyDonationLengthPercentage ;

      setMyDonationPercentage(newMyDonationLengthPercentageFloat);
      setTotalDonationPercentage(newTotalDonationPercentage);
 
  },[]);


  const data = [
    { name: 'Group A', value: myDonationPercentage },
    { name: 'Group B', value: myTotalDonationPercentage },
  ];

  return (
    
      <div className='flex justify-center items-center flex-col ml-8 md:ml-0 my-8'>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={` 70 md:150`}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex flex-col md:flex-row justify-center items-center ml-5 md:ml-0 gap-8 2'>
        <div className='flex h-0 justify-center items-center gap-2'>
          Your Donation
          <div className=' border-8 border-green-500  w-[100px] h-0;
height: 12px; '>
              
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          My Donation
          <div className=' w-[100px] h-0 border-8 border-red-500 width: 100px;
height: 12px; '>
              
          </div>
        </div>

      </div>
      </div>
    
  );
};

export default Statistics;