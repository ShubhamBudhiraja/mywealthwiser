import ServiceDetail from '@pages/ServiceDetail';
import data from '@static/investment-advisory.json';

export default function ServicePage() {
    return <ServiceDetail pageData={data} />;
}
