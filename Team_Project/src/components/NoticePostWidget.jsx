import Title from "./Title";
import Contents from "./Contents";
import useTitle from "../hook/useTitle";

const NoticePostWidget = ()=>{
    useTitle("공지 게시판");

    return (
        <div className="main-layout">
            <Title title={"공지"}></Title>
            <Contents type={"notification"}></Contents>  
        </div>
    ); 
}

export default NoticePostWidget; 