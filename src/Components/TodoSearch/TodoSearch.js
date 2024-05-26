import React from "react";

export default  function TodoSearch () {
    return (
        <div className={"text-center m-4 row"}>
            <div className={"container d-flex justify-content-between"}>
                <input className={"form-control mx-3 w-25"} id={"todo-search"} placeholder={"Search"}
                       type="text"/>
                <button className={"btn btn-dark text-white "}></button>
            </div>

        </div>
    );
}