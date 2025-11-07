// "use client";
// import { db } from "@/lib/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { useEffect } from "react";

// export default function TestFirebase() {
//   useEffect(() => {
//     async function testAdd() {
//       try {
//         await addDoc(collection(db, "test"), {
//           message: "Firebase connected successfully!",
//           time: new Date(),
//         });
//         console.log("Data berhasil dikirim ke Firestore");
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     testAdd();
//   }, []);

//   return <div className="text-center p-8">🔥 Firebase test page loaded!</div>;
// }
