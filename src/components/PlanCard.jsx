import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const PlanCard = (props) => {
    const {currentUser, setUsersDetails} = useContext(AuthContext);
    const navigate = useNavigate();

    const {title,
        currency, 
        price,
        trialPeriod,
        itemsPerMonth,
        deliveries,
        OrderHistory,
        priorityDelivery,
        customDeliverySlots,
        analyticsAccess,
        emailSupport,
        buttonlabel } = props


        const handleIt = () => {
            setUsersDetails(prev => prev.map((user)=>{
                return currentUser.name === user.name ? {...user, subscribeIt : {
                    title,
                    price,
                    trialPeriod,
                    itemsPerMonth,
                    deliveries,
                    OrderHistory,
                    priorityDelivery,
                    customDeliverySlots,
                    analyticsAccess,
                    emailSupport,
                }} : user
            }))
            navigate("/dashboard")
        }

    return (
        <div className="h-150 w-100 border-2 rounded-md p-2">
            <div>{title}</div>
            {/* {Badge} */}
            <div>Price:{currency}{price}</div>
            <div>{trialPeriod ? `${trialPeriod}-day free trial` : ""}</div>
            <div>Items per month: {itemsPerMonth}</div>
            <div>Deliveries: {deliveries}</div>
            <div>Order history: last {OrderHistory} orders</div>
            <div>Priority delivery: {priorityDelivery ? "✅" : '❌'}</div>
            <div>Custom delivery slots: {customDeliverySlots ? "✅" : '❌'}</div>
            <div>Analytics access: {analyticsAccess ? "✅" : '❌'}</div>
            <div>Email support: {emailSupport ? "✅" : '❌'}</div>
            <button
            onClick={handleIt} 
            className="border-2 p-1">
                {title === "Standard" || title === "Premium" ? "Subscribe" : buttonlabel}
            </button>
        </div>
    )
}

export default PlanCard;
