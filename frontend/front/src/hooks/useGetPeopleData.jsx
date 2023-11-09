import { useState, useEffect} from 'react'; 
import axios from 'axios'; 

export default function useGetPeopleData(){
    const [people, setPeople] = useState([{}])

    useEffect(() => {
        let cancel
        let url = 'http://localhost:8000/api/pessoas/'

        axios.get(url, {
            cancelToken: new axios.CancelToken( c => cancel = c)
        }).then( (res) => {setPeople(res.data)} )
        
        return () => {cancel()}
    
    }, [])

    return people

}
