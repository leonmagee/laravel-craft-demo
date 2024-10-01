// type JobsType = {
//     id: number;
//     description: string;
//     requirements: string;
//     user_name: string;
//     email: string;
//     phone: string;
// }

import JobItem from './JobItem';

const JobList = ({jobs}) => {


    const noNullDate = jobs.filter(job => job.created_at);
    const sortedJobs = noNullDate.sort(function(x, y){
        // return !(x.created_at - y.created_at);
        return new Date(x.created_at) < new Date(y.created_at) ? 1 : -1
    });
    
    const lastTenJobs = sortedJobs.slice(0, 10);

    const jobsListMap = lastTenJobs.map(job => {
        return (
            <JobItem
                id={job.id}
                requirements={job.requirements}
                description={job.description}
                user_name={job.user_name}
                phone={job.phone}
                email={job.email}
                created_at={job.created_at}
            />
            // <div className="card" key={job.id}>
            //     <p className="desription">Job Description: {job.description}</p>
            //     <p className="desription">Job Requirements: {job.requirements}</p>
            //     <p className="desription">Poster Name: {job.user_name}</p>
            //     <p className="desription">Email: {job.email}</p>
            //     <p className="desription">Phone: {job.phone}</p>
            //     <p className="desription">Created At: {job.created_at}</p>
            // </div>
        )
    })

    return (
        <div className="job-listing-wrap">
            {jobsListMap}
        </div>
    )
}

export default JobList;