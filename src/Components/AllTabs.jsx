import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const AllTabs = () => {
    return (
        <Tabs className='lg:mt-16  mt-10'>
            <div className='text-center mb-10 space-y-3'>
                <h1 className='text-5xl font-bold'>Jobs Category</h1>
                <p className='text-gray-500'>Discover your next career move, freelance gig, or internship</p>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <TabList className='font-bold border-b-2 text-info'>
                        <Tab>OnSite Jobs</Tab>
                        <Tab>Remote Jobs</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part Time</Tab>
                    </TabList>
                    <div className='mt-8'>
                        <TabPanel>
                            <h2>Any content 1</h2>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    );
};

export default AllTabs;