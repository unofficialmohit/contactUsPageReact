import React,{useState} from "react";
export default function Contact(){
    const[contact,setContact]=useState({});
    function handleSubmit(e){
        const data=e.target;
        e.preventDefault();
        setContact(
            {
                fullname:data[0].value,
                email:data[1].value,
                phone:data[2].value,
                query:data[3].value

            }
            );
            console.log(contact);
    }
    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <h1 className="title">Contact Us</h1>
            <div className="contact--name">
                <label htmlFor="fullname"> Full Name</label>
                <input type="text" name="fullname" id="fullname" required/>
               
            </div>
            <div  className="contact--detail">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="country">
                        <img src="dubai.png"/>
                        <h3>+966</h3><input type="text" name="phone" id="phone" required/>
                    </div>
                </div>
            </div>
            <div className="query">
                <label htmlFor="query">Query</label>
                <textarea id="query" required>

                </textarea>
            </div>
            <div className="btnDiv">
            <button className="btn">SEND</button>
            </div>

    </form>
        </div>
    )

}