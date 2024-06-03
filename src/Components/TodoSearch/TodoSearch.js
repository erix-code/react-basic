import React, {useContext} from "react";
import {TodoContext} from "../../Contexts/TodoContext";

export default  function TodoSearch () {
    const {searchQuery, setSearchQuery} = useContext(TodoContext);
    return (
        <div className={"m-3 mt-5"}>
            <div className={"container"}>
                <div className="row justify-content-md-center">
                    <div className={"col-9 col-md-6"}>
                        <input className={"form-control"}
                               id={"todo-search"}
                               value={searchQuery}
                               placeholder={"Search"}
                               onChange={(event)=>{ setSearchQuery(event.target.value)}}
                               type="text"/>
                    </div>
                    <div className="col-3 col-md-2">
                        <button className={"btn btn-dark text-white"}>
                            <i className={"fa-solid fa-magnifying-glass"}></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}