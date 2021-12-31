import axios from "axios";
import { BASE_URL, fetchCategory, fetchBreed } from "./utils";

jest.mock("axios");

describe("fetchAPI", () => {
  describe("when API call is successful", () => {
    it("should return category list", async () => {
      const categories = [
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
      ];
      axios.get.mockResolvedValueOnce(categories);
      const result = await fetchCategory();
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/categories`);
      expect(result).toEqual(categories);
    });
    it("should return breed list", async () => {
      const breeds = [
        { id: "abys", name: "Abyssinian" },
        { id: "aege", name: "Aegean" },
      ];
      axios.get.mockResolvedValueOnce(breeds);
      const result = await fetchBreed();
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/breeds`);
      expect(result).toEqual(breeds);
    });
  });

  describe("when API call fails", () => {
    it("should return empty category list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchCategory();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/categories`);
      expect(result).toEqual([]);
    });
    it("should return empty breed list", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await fetchBreed();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/breeds`);
      expect(result).toEqual([]);
    });
  });
});
