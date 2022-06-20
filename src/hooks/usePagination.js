import { useState,useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import {setTotalPage} from "../redux/slices/paginationSlice";


export default function usePagination(arr,row,page){
    const dispatch = useDispatch();
    const [currentData,setCurrentData] = useState([]);
   
    useEffect(()=>{
        if(row==="all"){
            dispatch(setTotalPage(1))
            setCurrentData(arr)
        }
        else{
            dispatch(setTotalPage(Math.ceil(arr.length/row)))
        const startIndex = (page-1)*row;
        const endIndex = page*row;
        setCurrentData([])
        for(let i = startIndex;i<endIndex;i++){
            if(!arr[i])break;
            else setCurrentData(prev=>[...prev,arr[i]]);
        }
    }
    },[arr,page,row])
    return currentData
}