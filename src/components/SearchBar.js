import React from 'react';
import {useState} from "react";

const SearchBar = ({onSubmit}) => {
    const [term,setTerm] = useState("")

    const onFormSubmit = (event) =>{
        event.preventDefault()
        onSubmit(term)
    }

    return (
        <div>
            <div>
                <div className={"ui segment inverted"}>
                    <form className={"ui form"} onSubmit={onFormSubmit}>
                        <div className={"field"}>
                            <label style={{color:"white"}}>Video Search</label>
                            <input
                                value={term}
                                onChange={event => setTerm(event.target.value)}
                                placeholder={"Search For A Video ..."}
                                style={{color:"white",backgroundColor:"gray"}}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
