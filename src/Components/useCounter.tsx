import React, { useState } from 'react';

export const useCounter = (init:any) => {

    const [count, setCount] = useState(init);
    const inc = () => setCount(count+1);
    const dec = () => setCount(count-1);
    const set = () => setCount(init);

    return [count, inc, dec, set];
}