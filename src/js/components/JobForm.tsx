import { useState } from 'react';
// import axios from 'axios';
// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


const JobForm = ({refetch, setRefetch}) => {
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    function formSubmit(e) {
        e.preventDefault();
        console.log('submit');

        if(description && requirements && userName && email && phone) {
            console.log('inputs set');
            axios({
                method: "post",
                url: "/create-new-job",
                data: {
                    description,
                    requirements,
                    user_name: userName,
                    email,
                    phone
                },
              })
                .then((res) => {
                  // do stuff
                  console.log({res});
                  setRefetch(!refetch);
                  setDescription("");
                  setRequirements("");
                  setUserName("");
                  setEmail("");
                  setPhone("");
                })
                .catch((err) => {
                  console.error(err);
                });
        }

  
    }
    return(
        <div className="job-form-wrap">
            <h3 className="mt-3">Add new job posting</h3>
            <form onClick={e => formSubmit(e)}>
            <div className="form-group mt-3">
                <label htmlFor="description">Job Description</label>
                <textarea className="form-control" name="description" onChange={e => setDescription(e.target.value)} value={description} />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="description">Job Requirements</label>
                <textarea className="form-control" name="description" onChange={e => setRequirements(e.target.value)} value={requirements} />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="user_name">Your Name</label>
                <input className="form-control" name="user_name" value={userName} onChange={e => setUserName(e.target.value)} placeholder="" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="user_name">Email Address</label>
                <input className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="user_name">Phone Number</label>
                <input className="form-control" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="" />
            </div>
            <button className="btn btn-primary mt-3" type="submit">Create Job Listing</button>
            </form>
        </div>
    )
}

export default JobForm;