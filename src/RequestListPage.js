import React from 'react';

// Dummy request data array
const requests = [
  {
    id: 1,
    name: "Shi",
    amount: "¥1,000",
    date: "2025/7/29",
    time: "11:10",
    title: "color",
    note: "hi",
    offerCount: 0,
  },
  {
    id: 2,
    name: "Shi",
    amount: "¥1,500",
    date: "2025/7/29",
    time: "05:16",
    title: "color",
    note: "hi",
    offerCount: 0,
  },
  {
    id: 3,
    name: "asd",
    amount: "¥500",
    date: "2025/8/6",
    time: "10:43",
    title: "asd",
    note: "asd",
    offerCount: 0,
  },
];

// Request Card component
function RequestCard({ name, amount, date, time, title, note, offerCount }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 w-full max-w-xs flex flex-col items-center mx-auto relative">
      {/* User image */}
      <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.692 0 4.977-2.286 4.977-5.006C16.977 5.285 14.69 3 12 3c-2.691 0-4.977 2.285-4.977 5.005C7.023 9.715 9.308 12 12 12Zm0 0c-3.339 0-7 1.672-7 4.946C5 20.33 8.661 22 12 22c3.34 0 7-1.672 7-4.946 0-3.274-3.66-4.946-7-4.946Z"></path>
        </svg>
      </div>
      {/* Offer count */}
      <span className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full absolute top-4 right-4">
        オファー数 {offerCount}
      </span>
      {/* Stars and new label */}
      <div className="mt-2 mb-3">
        <span className="inline-block text-yellow-400">★★★★★</span>
        <span className="block text-xs text-gray-500 mt-1">新規リクエスト</span>
      </div>
      {/* Main info */}
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-2 text-gray-600 text-sm">
        <span>👤 {name}</span>
        <span>💴 {amount}</span>
        <span>📅 {date}</span>
      </div>
      <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
        <span>⏰ {time}</span>
      </div>
      <div className="mb-4">{note}</div>
      <div className="flex gap-3 mt-auto w-full">
        <button className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
          詳細を見る
        </button>
        <button className="flex-1 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
          オファー
        </button>
      </div>
    </div>
  );
}

// Main Request List Page (No Header or Footer)
export default function RequestListPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">リクエスト一覧</h1>
        <div className="flex justify-center mb-8">
          <input
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2"
            placeholder="エリアやサービスで検索"
          />
        </div>
        {/* REQUEST CARDS */}
        <div className="flex flex-wrap justify-center gap-10">
          {requests.map((req) => (
            <RequestCard key={req.id} {...req} />
          ))}
        </div>
      </main>
    </div>
  );
}
