import "./HotPostWidget.css"; 
import Aside from "./Aside"; 
import Title from "./Title";
import PostList from "./PostList";
import Contents from "./Contents"; 
import useTitle from "../hook/useTitle";

const HotPostWidget = ()=>{
    useTitle("인기 게시판"); 

    return (
        <div className="main-layout">
            <Title title={"인기"}></Title>
            <Contents type={"hot"}></Contents>  
        </div>
        
    )
}

export default HotPostWidget; 