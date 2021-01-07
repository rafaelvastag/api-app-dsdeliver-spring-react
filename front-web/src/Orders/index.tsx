import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeader from './StepsHeader';

function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader></StepsHeader>
        </div>
    );
}

export default Orders;