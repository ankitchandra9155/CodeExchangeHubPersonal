import { useState } from "react"

export default function PostAnswer()

{
  const [answer,setAnswer]=useState("")
    
  const handelInput=(e)=>{
    setAnswer(e.target.value)
  }
    return (<div className="mt-2">
        <textarea id="message" rows="4" onChange={handelInput}value={answer}class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Write your answer here..."></textarea>
        <div className="hidden space-x-2 lg:block mt-2 float-right">
          <button
            type="button"
            onClick={()=>setAnswer("")}
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Discard
          </button>
          <button
            type="button"
            // onClick={logIn}
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Post Answer
          </button>
        </div>
    </div>)
}