import { plans } from "../utils/PlanData";
import PlanCard from "../components/PlanCard";

const Pricing = () => {
    return(
        <div className="h-screen w-screen border-2 flex flex-row gap-4 p-10">
            {plans.map((data)=>{
                return <PlanCard 
                key={data.identity.id} 
                title={data.identity.name}
                currency={data.pricing.currency}
                price={data.pricing.price}
                trialPeriod={data.pricing.trialPeriod}
                itemsPerMonth={data.usageLimits.monthlyItemLimit}
                deliveries={data.usageLimits.deliveryLimit}
                OrderHistory={data.usageLimits.orderHistoryLimit}
                priorityDelivery={data.features.priorityDelivery}
                customDeliverySlots={data.features.customDeliverySlots}
                analyticsAccess={data.features.analyticsAccess}
                emailSupport={data.features.supportLevel}
                buttonlabel={data.uiHelpers.buttonLabel}
                 />
            })}
        </div>
    )
}

export default Pricing;