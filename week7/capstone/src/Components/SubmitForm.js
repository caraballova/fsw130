import React, { useState } from 'react'

function SubmitForm() {
    const [inputData, setInputData] = useState({ firstName: "", lastName: "", phNumber: "" })
    const [storedData, setStoredData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setStoredData(prevStoredData => [...prevStoredData, inputData])
    }

    const info = storedData.map((data, index) =>
        <div key={index}>
            <h1>
                <span>Contact Information </span><br/></h1> <h2>{data.firstName} {data.lastName} <br /> {data.phNumber}</h2>
            <hr />
        </div>)
    return (
        <div>

            <h3>Please fill out your information here:</h3>
            <form onSubmit={handleSubmit} >
                <div className="form">
                    <input
                        placeholder="First Name"
                        name="firstName"
                        value={inputData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <br />

                    <input
                        placeholder="Last Name"
                        name="lastName"
                        value={inputData.lastName}
                        onChange={handleChange}
                    />
                    <br />

                    <input
                        placeholder="Phone Number"
                        name="phNumber"
                        value={inputData.phNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button className="submit">Submit</button>
            </form>
            {info}
        </div>
    )
}

export default SubmitForm