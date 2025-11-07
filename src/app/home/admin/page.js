// "use client";

// import { useEffect, useState } from "react";
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import ChatAdminBox from "./chat/ChatAdminBox";

// export default function AdminChatPage() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Ambil daftar user yang pernah chat
//   useEffect(() => {
//     const q = query(collection(db, "chats"), orderBy("lastUpdated", "desc"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const userList = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsers(userList);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar - daftar user */}
//       <div className="w-1/3 bg-white border-r shadow-md p-4 overflow-y-auto">
//         <h2 className="text-xl font-semibold text-[#112D4E] mb-4">Daftar Chat</h2>
//         {users.length === 0 && (
//           <p className="text-gray-500 text-sm">Belum ada pesan masuk</p>
//         )}
//         {users.map((user) => (
//           <div
//             key={user.id}
//             onClick={() => setSelectedUser(user.id)}
//             className={`p-3 mb-2 rounded-lg cursor-pointer hover:bg-blue-100 ${
//               selectedUser === user.id ? "bg-blue-200" : "bg-gray-50"
//             }`}
//           >
//             <p className="font-medium">{user.name || "User Tanpa Nama"}</p>
//             <p className="text-xs text-gray-500">
//               {user.lastMessage?.slice(0, 40) || "Belum ada pesan"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Chatbox utama */}
//       <div className="flex-1 bg-white p-6">
//         {selectedUser ? (
//           <ChatAdminBox userId={selectedUser} />
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-400">
//             Pilih user untuk mulai percakapan
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
