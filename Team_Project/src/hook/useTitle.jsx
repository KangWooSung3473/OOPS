import {useEffect} from "react";

const useTitle = (title)=>{
    useEffect(()=>{
        const $title = document.querySelector("title");
        $title.innerText = title;
    }, [title]); 
}

export default useTitle; 