import { FormEvent, useState } from "react";
import {
  // selectCartItems,
  selectCartTotalPrice,
} from "../redux/cart/cart.slice";
import { useAppSelector } from "../redux/store";

type CredoPayload = {
  amount: number;
  bearer: 0 | 1; // Fee bearer: 0 customer, 1 merchant
  callbackUrl: string;
  channels: ("card" | "bank")[];
  currency: string;
  customerFirstName: string;
  customerLastName: string;
  customerPhoneNumber: string;
  email: string;
  metadata?: Partial<{
    bankAccount: string;
    customFields: {
      variable_name: string;
      value: string | number;
      display_name: string;
    }[];
  }>;
  reference?: string;
  serviceCode?: string;
};

export const CredoCheckoutForm = () => {
  const amount = useAppSelector(selectCartTotalPrice);
  // const items = useAppSelector(selectCartItems);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: CredoPayload = {
      amount: !isNaN(parseFloat(amount)) ? parseFloat(amount) * 1500 : 0,
      bearer: 0, // Customer bears the fee
      callbackUrl: `${window.location.origin}/payment/callback`,
      channels: ["card", "bank"],
      currency: "NGN",
      customerFirstName: formData.firstName,
      customerLastName: formData.lastName,
      customerPhoneNumber: formData.phoneNumber,
      email: formData.email,
      reference: `ORDER-${Date.now()}`,
    };

    try {
      // TODO: Implement API call to your backend to initialize payment
      console.log("Submitting payment:", payload);
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6">
      <div className="space-y-2">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          placeholder-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          placeholder-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          placeholder-gray-400"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          placeholder-gray-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow-sm
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
        focus:ring-offset-2 transition-colors duration-200"
      >
        Pay ${!isNaN(parseFloat(amount)) ? parseFloat(amount) : 0}
      </button>
    </form>
  );
};
