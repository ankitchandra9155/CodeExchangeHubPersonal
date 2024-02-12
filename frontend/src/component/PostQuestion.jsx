import { useState } from "react";
import Tag from "./Tag";


export default function PostQuestion() {
    const [question, setQuestions] = useState("")
    const handelInput = (e) => {
        setQuestions(e.target.value)
    }
    return (<>
        <section className="px-2">
            <div className="mx-auto max-w-7xl py-5 relative">
                <div>
                    <div className="max-w-7xl">
                        <h1 className="text-2xl font-bold text-black">Post Question</h1>
                    </div>
                    <div className="mt-3">
                        <input
                            className="flex h-[50px] w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Title"
                            onChange={handleTitleChange}
                        ></input>
                    </div>
                    <textarea id="message" rows="10" onChange={handelInput} value={question} class="block p-2.5 w-full text-sm text-gray-900  mt-3 rounded-lg border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Question Description....."></textarea>
                </div>
                <div className="">
                    <Tag />
                </div>
                <button
                    type="button"
                    // onClick={logIn}
                    className="rounded-md border border-black absolute top-[630px] right-0   px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Post Question
                </button>

            </div>
        </section>


    </>)
}