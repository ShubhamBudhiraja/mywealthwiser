import ServiceDetail from '@pages/ServiceDetail';
import data from '@static/credit-management.json';

export default function ServicePage() {
    return <ServiceDetail pageData={data} />;
}
