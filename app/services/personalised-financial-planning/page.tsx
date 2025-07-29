import ServiceDetail from '@pages/ServiceDetail';
import data from '@static/personalised-financial-planning.json';

export default function ServicePage() {
    return <ServiceDetail pageData={data} />;
}
