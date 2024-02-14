import React, { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import CardComponent from '../QuestionComponent/QuestionCardComponent'
import { Pagination } from '../Pagination'
import AllquestionComponents from '../QuestionComponent/AllquestionComponents'
import QuestionDiscription from '../QuestionDiscription/QuestionDiscription'
import PostQuestion from '../PostQuestion/PostQuestion'
import { pagination } from '../../service/paginationService'
import { useSelector } from 'react-redux'

export default function FilterComponent() {
  const [allQuestionVisable, setAllQuestionVisable] = useState(true)
  const [questionDescription, setQuestionDescription] = useState(false)
  const [postQuestion, setPostQuestion] = useState(false)
  const [displayQuestion,setDisplayQuestion]=useState()
  const [pageNumber,setPageNumber]=useState()
  const token=useSelector((state)=>state.auth.token)
  const postQuestionVisable = () => {
    if (allQuestionVisable)
      setAllQuestionVisable(false)

    if (questionDescription)
      setQuestionDescription(false)

    if (postQuestion) { setPostQuestion(false); setAllQuestionVisable(true) }
    else
      setPostQuestion(true)

  }
 
  
  useEffect(()=>{
    const {jsonQuestionData,totalPages}=pagination(0,token)
    setDisplayQuestion(jsonQuestionData)
    setPageNumber(totalPages)

    

    

     
  },[])

  
  return (
    <>
      <section className="w-full ">
        <div className=" w-full px-1 py-4 lg:px-10">

          {/* <hr className="my-1" /> */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-2">
            <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
              <div className="flex items-center justify-between p-4 hover:bg-gray-200">
                <h6 className="font-semibold">Latest Question</h6>
                <span className="block cursor-pointer">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-200">
                <h6 className="font-semibold">Top Question</h6>
                <span className="block  cursor-pointer">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-200" onClick={postQuestionVisable}>
                <h6 className="font-semibold" >Post Question</h6>
                <span className="block  cursor-pointer">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="h-[690px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:min-h-min overflow-y-auto">
              {allQuestionVisable && <AllquestionComponents setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription} />}
              {questionDescription && <QuestionDiscription setAllQuestionVisable={setAllQuestionVisable} setQuestionDescription={setQuestionDescription} />}
              {postQuestion && <PostQuestion />}
            </div>

          </div>

        </div>
      </section>
      <div className='flex items-center justify-center  v-screen'>
        <Pagination />
      </div>
    </>
  )
}
