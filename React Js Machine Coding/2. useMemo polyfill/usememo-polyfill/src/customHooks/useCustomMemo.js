import { useEffect, useRef } from "react"


const areEqual = (prevDeps, nextDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++){
        if(prevDeps[i] !== nextDeps[i]) {
            return false;
        }
    }

    return true;
}

const useCustomMemo = (cb, deps) => {
    //variable or state => cached value
    const memoizeRef = useRef(null);

    //Change in deps
    if(!memoizeRef.current || !areEqual(memoizeRef.current.deps, deps)) {
        memoizeRef.current = {
            value: cb(),
            deps
        };
    }


    //cleanup logic
    useEffect(() => {
        return () => {
            memoizeRef.current = null;
        }
    }, []);


    //return the memoised value(if any)
    return memoizeRef.current.value;

}

export default useCustomMemo