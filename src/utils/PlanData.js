export const plans = [
  {
    identity: {
      id: "free",
      name: "Free Trial",
      description: "Try our service for 7 days",
      billingCycle: "monthly"
    },
    pricing: {
      price: 0,
      currency: "$",
      trialPeriod: 7
    },
    usageLimits: {
      monthlyItemLimit: 20,
      deliveryLimit: 2,
      orderHistoryLimit: 30
    },
    features: {
      priorityDelivery: false,
      customDeliverySlots: false,
      analyticsAccess: false,
      supportLevel: "email"
    },
    uiHelpers: {
      highlight: false,
      badgeText: "Trial",
      buttonLabel: "Start Free Trial"
    },
    eligibility: {
      upgradeFrom: [],
      downgradeTo: []
    }
  },
  {
    identity: {
      id: "basic",
      name: "Basic",
      description: "Starter plan for occasional users",
      billingCycle: "monthly"
    },
    pricing: {
      price: 9,
      currency: "$"
    },
    usageLimits: {
      monthlyItemLimit: 60,
      deliveryLimit: 4,
      orderHistoryLimit: 90
    },
    features: {
      priorityDelivery: false,
      customDeliverySlots: false,
      analyticsAccess: false,
      supportLevel: "email"
    },
    uiHelpers: {
      highlight: false,
      badgeText: "",
      buttonLabel: "Subscribe"
    },
    eligibility: {
      upgradeFrom: ["free"],
      downgradeTo: []
    }
  },
  {
    identity: {
      id: "standard",
      name: "Standard",
      description: "Most popular plan for regular users",
      billingCycle: "monthly"
    },
    pricing: {
      price: 19,
      currency: "$"
    },
    usageLimits: {
      monthlyItemLimit: 100,
      deliveryLimit: 6,
      orderHistoryLimit: 180
    },
    features: {
      priorityDelivery: true,
      customDeliverySlots: true,
      analyticsAccess: true,
      supportLevel: "email + chat"
    },
    uiHelpers: {
      highlight: true,
      badgeText: "Most Popular",
      buttonLabel: "Upgrade",
    },
    eligibility: {
      upgradeFrom: ["basic", "free"],
      downgradeTo: ["basic"]
    }
  },
  {
    identity: {
      id: "premium",
      name: "Premium",
      description: "Full access for power users",
      billingCycle: "monthly"
    },
    pricing: {
      price: 29,
      currency: "$"
    },
    usageLimits: {
      monthlyItemLimit: 150,
      deliveryLimit: 8,
      orderHistoryLimit: Infinity
    },
    features: {
      priorityDelivery: true,
      customDeliverySlots: true,
      analyticsAccess: true,
      supportLevel: "priority chat"
    },
    uiHelpers: {
      highlight: false,
      badgeText: "",
      buttonLabel: "Upgrade"
    },
    eligibility: {
      upgradeFrom: ["standard", "basic", "free"],
      downgradeTo: ["standard", "basic"]
    }
  }
];
