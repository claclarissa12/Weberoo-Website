// "use client";
// import { useState } from "react";
// import { db } from "@/lib/firebase";
// import { addDoc, collection, serverTimestamp, setDoc, doc } from "firebase/firestore";

// export default function MessageInput({ userId }) {
//   const [message, setMessage] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (message.trim() === "") return;

//     // Tambah pesan
//     await addDoc(collection(db, "chats", userId, "messages"), {
//       text: message,
//       sender: "user",
//       timestamp: serverTimestamp(),
//     });

//     // Update last message di parent doc
//     await setDoc(
//       doc(db, "chats", userId),
//       {
//         lastMessage: message,
//         lastUpdated: serverTimestamp(),
//         name: "User 123", // bisa diganti sesuai data user login
//       },
//       { merge: true }
//     );

//     setMessage("");
//   };

//   return (
//     <form onSubmit={sendMessage} className="flex p-3 border-t bg-white">
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Tulis pesan..."
//         className="flex-1 border rounded-lg p-2 focus:outline-none"
//       />
//       <button
//         type="submit"
//         className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//       >
//         Kirim
//       </button>
//     </form>
//   );
// }
