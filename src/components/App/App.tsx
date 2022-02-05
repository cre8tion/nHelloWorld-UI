import React, { ChangeEvent, useState } from "react";
import { Nav } from "../Nav";
import * as HelloWorld from "../../contracts/hello-world";
import { wallet } from "../../utils/near";

export function App() {
  const currentUser = wallet.getAccountId();
  const [input, setInput] = useState<string>();
  const [text, setText] = useState<string>();

  const getHelloWorldName = () => {
    if (input) {
      HelloWorld.getHelloWorld({
        name: input
      }).then(res => setText(res));
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Nav />
      <main className="container">
        <div className="flex space-x-2 justify-center">
          <h1 className="sm:text-xl md:text-3xl">Welcome</h1>
          {
            currentUser ? <h1 className="sm:text-xl md:text-3xl">{currentUser}!</h1>
              : <h1 className="sm:text-xl md:text-3xl">User!</h1>
          }
        </div>
        <br />
        <div className="flex items-center max-w-md mx-auto space-x-4">
          <div className="w-full">
            <input className="w-full px-4 py-1 text-white rounded-full focus:outline-none"
              placeholder="name" onChange={handleChange} />
          </div>
          <div>
            <button type="submit" onClick={getHelloWorldName} className="h-10 px-6 font-semibold rounded-md bg-black text-white" >
              Submit
            </button>
          </div>
        </div>
        <br />
        <div className="container flex justify-center">
          {
            text ? <p className="sm:text-lg md:text-xl">{text}</p>
              : null
          }
        </div>
      </main>
    </>
  );
}
