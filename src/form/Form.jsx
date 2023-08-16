import React from "react";
import { useState } from "react";

export default function Form() {
    const [data, setData] = useState(
        {
            id: "",
            name: "",
            version: "",
            description: ""
        }
    );

    const [record, setRecord] = useState([]);

    function eventHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newRecord = { ...data, key: new Date().getTime().toString() };
        console.log(record)
        setRecord([...record, newRecord]);
        setData(
            {
                id: "",
                name: "",
                version: "",
                description: ""
            }
        );
    }

    return (
        <div className="d-flex justify-content-center "
            style={{ backgroundColor: "#e5e5e5" }}>

            <form onSubmit={handleSubmit} className="border border-dark p-5 m-5 d-flex flex-column ">

                <label className="text-center" htmlFor="id">Enter the ID:</label>

                <input type="text"
                    id="id"
                    name="id"
                    value={data.id}
                    placeholder="Enter ID"
                    onChange={eventHandler}
                />


                <br />
                <label className="text-center" htmlFor="name">
                    Enter the Name:</label>
                <input type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    placeholder="Enter name"
                    onChange={eventHandler}
                />


                <br />

                <label className="text-center" htmlFor="version">
                    Enter the version:</label>
                <input type="text"
                    id="version"
                    name="version"
                    value={data.version}
                    placeholder="Enter version"
                    onChange={eventHandler}
                />


                <br />

                <label className="text-center" htmlFor="description">
                    Enter the description:</label>
                <input type="text"
                    id="description"
                    name="description"
                    value={data.description}
                    placeholder="Enter description"
                    onChange={eventHandler}
                />


                <br />
                <div className="d-flex flex-row justify-content-center">
                    <button type="submit">Submit</button>&emsp;
                    <button >Back</button>
                </div>

            </form>


        </div>


    );

}


// private routing
// nested rounting aur outlet