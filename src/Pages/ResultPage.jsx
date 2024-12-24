import { useParams } from "react-router-dom";

function ResultPage(){
    const {data} = useParams();
    return(
        <div className="sm: w-full ml-10 md:w-[40vw] h-[15vh] flex-cols justify-center text-2xl">
            <h1>Result:</h1>
            <p>{data}</p>
        </div>
    )
}

export default ResultPage;