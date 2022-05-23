
import { useState } from "react";

export const useList = () => {

    const init = [1, 2, 3, 4];

    const [list, setList]: any = useState(init)

    const push = (x: number) => {
        setList((list: any) => [...list, x])
        console.log(list)
    }

    const pop = () => {
        let last = list.pop()
        let newarr = list.filter((x: any) => x !== last)
        setList(newarr)
    }

    const clear = () => {
        setList([]);
    }

    const reset = () => {
        setList(init);
    }

    const map = () => {
        let newList = list.map((x: any) => x * 2);
        setList(newList)
        console.log(newList)
    }

    return [list, { push, pop, clear, reset, map }];
}

