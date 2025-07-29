import PricingPlans from '@pages/PricingPlans';
import pageData from '@static/pricing-plans.json';

const Page = () => {
    return <PricingPlans pageData={pageData} />;
};

export default Page;
