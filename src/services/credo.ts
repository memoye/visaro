import axios from "axios";

const CREDO_BASE_URL = import.meta.env.VITE_CREDO_BASE_URL;
const CREDO_PUBLIC_KEY = import.meta.env.VITE_CREDO_PUBLIC_KEY;
const CREDO_SECRET_KEY = import.meta.env.VITE_CREDO_SECRET_KEY;

type CredoPayload = {
  amount: number;
  bearer: 0 | 1;
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

const credoApi = axios.create({
  baseURL: CREDO_BASE_URL,
  headers: {
    Authorization: `Bearer ${CREDO_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
});

export const initializeTransaction = async (payload: CredoPayload) => {
  try {
    const response = await credoApi.post("/transaction/initialize", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to initialize transaction"
      );
    }
    throw error;
  }
};
