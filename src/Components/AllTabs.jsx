import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const AllTabs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <Tabs className='lg:mt-16  mt-10'>
            <div className='text-center mb-10 space-y-3'>
                <h1 className='text-5xl font-bold'>Jobs Category</h1>
                <p className='text-gray-500'>Discover your next career move, freelance gig, or internship</p>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <TabList className='font-bold border-b-2 text-info'>
                        <Tab>Onsite</Tab>
                        <Tab>Remote</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part Time</Tab>
                    </TabList>
                    <div className='mt-8'>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                                {
                                    jobs.filter(s => s.job_variant === 'Onsite').map(job => <JobCard key={job._id} job={job}></JobCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 gap-6'>
                                {
                                    jobs.filter(s => s.job_variant === 'Remote').map(job => <JobCard key={job._id} job={job}></JobCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 gap-6'>
                                {
                                    jobs.filter(s => s.job_variant === 'Hybrid').map(job => <JobCard key={job._id} job={job}></JobCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 gap-6'>
                                {
                                    jobs.filter(s => s.job_variant === 'Part Time').map(job => <JobCard key={job._id} job={job}></JobCard>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    );
};

export default AllTabs;