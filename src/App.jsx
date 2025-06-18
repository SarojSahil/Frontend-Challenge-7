import { useState } from "react";
import Modal from "./components/Modal"

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="w-screen min-h-screen grid place-items-center bg-bluish-purple-100">
        <button 
        onClick={() => setOpen(true)}
        className="min-w-[140px] p-2 rounded bg-bluish-purple-500 text-white text-sm hover:bg-bluish-purple-700">
          Give Feedback
          </button>
      </main>
      {
        open && <Modal toggleModal={setOpen} />
      }
    </>
  );
}

export default App
