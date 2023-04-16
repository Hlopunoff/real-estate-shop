import { useState, useLayoutEffect } from "react";


const queries = [
    '(max-width: 768px)'
];

export const useMatchMedia = (): Record<string, boolean> => {
    const mediaQueryLists = queries.map(query => matchMedia(query));
    const getValues = () => mediaQueryLists.map(mql => mql.matches);
    const [values, setValues] = useState<boolean[]>(getValues);


    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });

    return ['isMobile'].reduce((acc, screen, i) => ({
        ...acc,
        [screen]: values[i],
    }), {});
}