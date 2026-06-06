import "./PostWrite.css"; 
import Aside from "./Aside"; 
import WriteSection from "./WriteSection";
import Title from "./Title"; 
import useTitle from "../hook/useTitle";

//글은 자유게시판에만 쓸 수 있게 했다.
const PostWrite = ()=>{
    useTitle("글쓰기 페이지");

    return (
        <div className="write-container">
            <Title title={"자유"}></Title>
            <div className="post-write">
                <Aside></Aside>
                <WriteSection></WriteSection>
            </div>
        </div>
        
        
    ); 
}

export default PostWrite; 