import Home from '@pages/Home';
import pageData from '@static/home.json';

const Page = () => {
    return <Home pageData={pageData} />;
};

export default Page;
