import React from 'react'
import AnswersComponent from './AnswersComponent'
import PostAnswer from './PostAnswer'

export default function QuestionDiscription({ setAllQuestionVisable, setQuestionDescription }) {
    return (
        <section className="px-2">
            <div className="mx-auto max-w-7xl py-5">
                <div>
                    <div className="max-w-7xl">
                        <h1 className="text-2xl font-bold text-black">Title</h1>
                        <p className="mt-4 text-base leading-6 tracking-wide text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <div>
                            <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-green-800 mr-2 ">
                                JAVA
                            </span>
                            <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-green-800 mr-2">
                                springboot
                            </span>
                            <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-green-800 mr-2">
                                JVM
                            </span>
                            <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-green-800 mr-2">
                                Error
                            </span>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-black mt-3 ">All Answers</h1>
                    <div className="h-[290px] overflow-y-auto py-3">
                        {Array.from({ length: 9}).map((_, i) => (
                            <AnswersComponent key={i}/>
                            ))
                        }
                    </div>
                    <h1 className="text-xl font-bold text-black mt-3 ">Your Answers</h1>
                    <PostAnswer/>
                </div>
            </div>
        </section>
    )
}
