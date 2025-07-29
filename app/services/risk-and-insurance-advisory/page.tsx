import ServiceDetail from '@pages/ServiceDetail';
import data from '@static/risk-and-insurance-advisory.json';

export default function ServicePage() {
    return <ServiceDetail pageData={data} />;
}
