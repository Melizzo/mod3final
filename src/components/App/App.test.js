import React from "React";
import App from "./App";
import "@testing-library/jest-dom";
import UrlForm from "../UrlForm/UrlForm";
import UrlContainer from "../UrlContainer/UrlContainer";
import {
  render,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { getUrls, postUrl } from "../../apiCalls.js";
jest.mock("../../apiCalls.js");

describe("App", () => {
  beforeEach(async () => {
    const mockUrl = {
      urls: [
        {
          id: 1,
          long_url:
            "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          short_url: "http://localhost:3001/useshorturl/1",
          title: "Awesome photo",
        },
      ],
    };

    const mostPost = {
      long_url: "https://unsplash.com/photos/giL2fHNr3Lc",
      title: "sample post title",
    };
    await getUrls.mockResolvedValueOnce(mockUrl);
    await postUrl.mockResolvedValueOnce(mostPost);
  });

  it("should display a header and a post by default", async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const title = getByText("URL Shortener");
    const titleInput = getByPlaceholderText("Title...");
    const urlInput = getByPlaceholderText("URL to Shorten...");
    const button = getByText("Shorten Please!");
    fireEvent.change(titleInput, {target: {value: 'sample post title'}})
    fireEvent.change(urlInput, {target: {value: 'https://unsplash.com/photos/giL2fHNr3Lc'}})
    fireEvent.click(button)
    const newPost = await waitFor(() => getByText('sample post title'))
    expect(newPost).toBeInTheDocument()
  });
});
