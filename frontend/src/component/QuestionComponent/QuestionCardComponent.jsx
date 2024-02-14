import React from 'react'
export default function CardComponent({setAllQuestionVisable,setQuestionDescription}) {
    const visable=()=>{
        setAllQuestionVisable(false)
        setQuestionDescription(true)
    }
    return (
        <>
        <div className="mx-auto w-full max-w-7xl  py-0">
            <div className="mx-auto  max-w-7xl md:my-6">
                <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
                    <p className="text-2xl font-bold text-gray-900 float-left"onClick={visable}>Title</p>
                    <div className="mt-6 ">
                        <p className="text-base  text-gray-900 float-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse voluptate. Numquam, natus quibusdam. Perferendis, quae maxime delectus quos minus consequuntur necessitatibus! Sit quasi aliquam optio culpa, neque eaque dolore?</p>
                    </div>
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
                    <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                        <div className="h-px w-full bg-slate-200 grid grid-cols-3 gap-1">
                            <span onClick={()=>{console.log("hello");}}>Votes:0</span>
                            <span>Posted by: ankit</span>
                            <span>Posted On: June 16,2023</span> 
                        </div>
                    </div>            
                    
                </div>
            </div>
        </div>
        </>

    )
}
