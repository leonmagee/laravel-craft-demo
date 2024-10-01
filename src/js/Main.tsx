import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import JobForm from './components/JobForm';

const Main = () => {

  const [jobs, setJobs] = useState([]);
  const [refetch, setRefetch] = useState(false);

    async function FetchJobs() {
      const res = await fetch('/get-jobs-list');
      const data = await res.json();
      setJobs(data);
      // console.log({res});
      // console.log({data});
    }

    useEffect(() => {
      FetchJobs();
    }, [refetch]);

      return (
        <div className="app-inner">
          <div className="app-title mb-3">
              <h1>Job Posting Board</h1>
          </div>
          <JobList jobs={jobs} />
          <JobForm setRefetch={setRefetch} refetch={refetch} />
        </div>
      )
}

export default Main;