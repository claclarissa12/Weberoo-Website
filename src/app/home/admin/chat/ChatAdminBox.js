// "use client";

// import { useEffect, useState } from "react";
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
//   serverTimestamp,
//   doc,
//   setDoc,
// } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// export default function ChatAdminBox({ userId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Ambil pesan real-time dari Firestore
//   useEffect(() => {
//     const q = query(
//       collection(db, "chats", userId, "messages"),
//       orderBy("timestamp", "asc")
//     );
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setMessages(msgs);
//     });
//     return () => unsubscribe();
//   }, [userId]);

//   // Kirim pesan admin
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     await addDoc(collection(db, "chats", userId, "messages"), {
//       text: input,
//       sender: "admin",
//       timestamp: serverTimestamp(),
//     });

//     await setDoc(
//       doc(db, "chats", userId),
//       {
//         lastMessage: input,
//         lastUpdated: serverTimestamp(),
//       },
//       { merge: true }
//     );

//     setInput("");
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 overflow-y-auto mb-4 space-y-2">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`p-3 rounded-lg max-w-[70%] ${
//               msg.sender === "admin"
//                 ? "bg-blue-600 text-white self-end ml-auto"
//                 : "bg-gray-200 text-gray-800 self-start"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <form onSubmit={sendMessage} className="flex gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ketik pesan..."
//           className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg hover:bg-[#2C5480] transition"
//         >
//           Kirim
//         </button>
//       </form>
//     </div>
//   );
// }
