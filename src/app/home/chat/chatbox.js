// "use client";
// import { useEffect, useState } from "react";
// import { db } from "@/lib/firebase";
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

// export default function ChatBox({ userId }) {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const q = query(
//       collection(db, "chats", userId, "messages"),
//       orderBy("timestamp", "asc")
//     );
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => doc.data()));
//     });
//     return () => unsubscribe();
//   }, [userId]);

//   return (
//     <div className="flex-1 p-4 h-96 overflow-y-auto bg-gray-50">
//       {messages.map((msg, index) => (
//         <div
//           key={index}
//           className={`my-2 flex ${
//             msg.sender === "user" ? "justify-end" : "justify-start"
//           }`}
//         >
//           <div
//             className={`p-2 px-4 rounded-2xl ${
//               msg.sender === "user"
//                 ? "bg-blue-500 text-white rounded-br-none"
//                 : "bg-gray-300 text-black rounded-bl-none"
//             }`}
//           >
//             {msg.text}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
