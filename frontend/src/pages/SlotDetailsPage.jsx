
import React from 'react';

const slotDetailsData = [
  { staffName: "Omkar Tuptewar", customer: "Alice", time: "10:00 AM", location: "Office", monthYear: "October 2024", dates: "01, 02", count: 5 },
  { staffName: "John Doe", customer: "Bob", time: "11:30 AM", location: "Home", monthYear: "October 2024", dates: "03", count: 3 },
  { staffName: "Jane Smith", customer: "Charlie", time: "1:00 PM", location: "Office", monthYear: "October 2024", dates: "04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06,04, 05, 06", count: 7 },
  { staffName: "Alice Johnson", customer: "Diana", time: "9:00 AM", location: "Café", monthYear: "October 2024", dates: "07", count: 2 },
  { staffName: "Bob Brown", customer: "Eve", time: "2:30 PM", location: "Office", monthYear: "October 2024", dates: "08, 09", count: 4 },
  { staffName: "Charlie Green", customer: "Frank", time: "12:15 PM", location: "Library", monthYear: "October 2024", dates: "10", count: 1 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
  { staffName: "Diana Prince", customer: "Grace", time: "3:45 PM", location: "Home", monthYear: "October 2024", dates: "11", count: 3 },
];

const SlotDetailsPage = () => {
  return (
    <div className="overflow-hidden  bg-gradient-to-r from-gray-100 to-gray-200  rounded-lg shadow-lg h-[590px] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Slot Details</h1>
      <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Staff Name</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Customer</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Time</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Location</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Month-Year</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold w-80">Dates</th>
            <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Count</th>
          </tr>
        </thead>
        <tbody>
          {slotDetailsData.map((slot, index) => (
            <tr
              key={index}
              className="transform transition-transform duration-200 ease-in-out hover:bg-purple-200  hover:shadow-lg"
            >
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.staffName}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.customer}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.time}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.location}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.monthYear}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{slot.dates}</td>
              <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{slot.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SlotDetailsPage;
