export const pagination=async(pageNumber,token)=>{

    const response=await fetch("http://localhost:8080/api/questions/0",{
        method:"GET",
        headers:{
            "Authorization":token,
            "Content-Type":"application/json",
        },
    })
    if(!response.ok)
    {
        console.log("Error in fetching Api");
    }
    const data=await response.json()
    const jsonQuestionData=await data.questionDtoList;
    const totalPages=await data.totalPages;
    console.log("Service",jsonQuestionData);
    console.log("Service",totalPages);
    return {jsonQuestionData,totalPages};

}