import { useState, useEffect} from 'react'; 
import axios from 'axios'; 

export default function useGetPersonDataById( {id} ){
    const [person, setPerson] = useState({})

    useEffect(() => {
        let cancel
        let url = `http://localhost:8000/api/pessoas/${id}`

        axios.get(url, {
            cancelToken: new axios.CancelToken( c => cancel = c)
        }).then( (res) => {setPerson(res.data)} )
        
        return () => {cancel()}
    
    }, [])

    return person

}
