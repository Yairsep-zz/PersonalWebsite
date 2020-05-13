import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

// var isLoggedIn = false;


function ContactMe(){

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setContact(prevValue => ({...prevValue, [name]: value}));
    }

    return <div className="container">
        <h1>Contact Me</h1>
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
        <p>{contact.email}</p>
            <Form>
                <input
                    onChange={handleChange}
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="email"
                    value={contact.email}
                    placeholder="Email"
                />
            </Form>
    </div>
}

export default ContactMe;