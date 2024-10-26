import React from 'react';

const summaryData = [
  { sno: 1, staffName: "Omkar Tuptewar", loginCount: 5 },
  { sno: 2, staffName: "John Doe", loginCount: 3 },
  { sno: 3, staffName: "Jane Smith", loginCount: 4 },
  { sno: 4, staffName: "Alice Johnson", loginCount: 2 },
  { sno: 5, staffName: "Bob Brown", loginCount: 1 },
  { sno: 6, staffName: "Charlie Green", loginCount: 6 },
  { sno: 7, staffName: "Diana Prince", loginCount: 2 },
  { sno: 7, staffName: "Diana Prince", loginCount: 2 },
  { sno: 7, staffName: "Diana Prince", loginCount: 2 },
];

const customerData = [
  { sno: 1, customerName: "Customer A", loginCount: 7 },
  { sno: 2, customerName: "Customer B", loginCount: 4 },
  { sno: 3, customerName: "Customer C", loginCount: 8 },
  { sno: 4, customerName: "Customer D", loginCount: 3 },
  { sno: 5, customerName: "Customer E", loginCount: 5 },
  { sno: 5, customerName: "Customer E", loginCount: 5 },
  { sno: 5, customerName: "Customer E", loginCount: 5 },
  { sno: 5, customerName: "Customer E", loginCount: 5 },
  { sno: 5, customerName: "Customer E", loginCount: 5 },


  
];

const SummaryPage = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg h-[580px] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 text-center k"> Staff And Customer Summary</h1>
      <div className="flex justify-between space-x-6">
        {/* Staff Summary Table */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-center">Staff Summary</h2>
          <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">SNo</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Staff Name</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((item, index) => (
                <tr
                  key={index}
                  className="transform transition-transform duration-200 ease-in-out hover:bg-purple-200 hover:shadow-lg"
                >
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.sno}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.staffName}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{item.loginCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customer Summary Table */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-center">Customer Summary</h2>
          <table className="min-w-full bg-white border border-gray-400 rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">SNo</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Customer Name</th>
                <th className="py-4 px-6 border-b-2 border-gray-400 text-center text-lg font-bold">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((item, index) => (
                <tr
                  key={index}
                  className="transform transition-transform duration-200 ease-in-out hover:bg-green-200 hover:shadow-lg"
                >
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.sno}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400 border-r">{item.customerName}</td>
                  <td className="py-4 px-6 text-center text-md font-semibold border-b border-gray-400">{item.loginCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
