import axios from "axios";
import { BASE_URL, fetchUsers } from "./utils";

jest.mock("axios");

describe("fetchAPI", () => {
  describe("when API call is successful", () => {
    it("should return category list", async () => {
      const categories = [
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
      ];
      axios.get.mockResolvedValueOnce(categories);
      const result = await fetchUsers();
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/categories`);
      expect(result).toEqual(categories);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/categories`);
      expect(result).toEqual([]);
    });
  });
});