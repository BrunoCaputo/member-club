import { apiConfig } from "./api-config";

export async function searchUserById({ userId }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients/${userId}`);

    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
}
