import Title from "./Title";
import Contents from "./Contents";
import useTitle from "../hook/useTitle";

const FreePostWidget = ()=>{
    useTitle("자유 게시판");

    return(
        <div className="main-layout">
            <Title title={"자유"}></Title>
            <Contents type={"free"}></Contents>  
        </div>
    ); 
}

export default FreePostWidget; 