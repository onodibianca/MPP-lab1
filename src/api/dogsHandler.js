import {useEffect, useState} from "react";

export function useDogs() {
    const [myDogs, setMyDogs] = useState([]);

    useEffect(() => {
        const testBE = async () => {
            const response = await fetch('http://localhost:4000/dogs').catch((e) => {
                console.log('request failed', e);
            });
            if (!response) return
            const myData = await response.json()
            setMyDogs(myData.Dogs);
        }

        testBE();
    }, [])

    return [myDogs]

}
export function useDog(id) {
   const [myDog, setMyDog] = useState([]);

    useEffect(() => {
        const testBE = async () => {
            const response = await fetch('http://localhost:4000/dogs/'+id, ).catch((e) => {
                console.log('request failed', e);
            });
            if (!response) return
            const myData = await response.json()
            setMyDog(myData.Dogs);
        }

        testBE();
    }, [])

    return [myDog]

}