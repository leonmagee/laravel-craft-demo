const JobItem = ({id, description, requirements, user_name, email, phone, created_at}) => {
    return (
        <div className="card" key={id}>
        <p className="desription">Job Description: {description}</p>
        <p className="desription">Job Requirements: {requirements}</p>
        <p className="desription">Poster Name: {user_name}</p>
        <p className="desription">Email: {email}</p>
        <p className="desription">Phone: {phone}</p>
        <p className="desription">Created At: {created_at}</p>
    </div>
    )
}

export default JobItem;