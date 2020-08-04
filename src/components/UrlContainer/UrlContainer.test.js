import React from 'React'
import UrlContainer from './UrlContainer'
import "@testing-library/jest-dom"
import {render, waitFor, fireEvent} from "@testing-library/react"


describe("UrlContainer", () => {
  it('should display a url container', () => {
    const mockUrls = [{
      id: 1,
      title: 'this is a title'
    }]
    const {getByText, getByLabelText} = render(
      <UrlContainer urls={mockUrls} />
    )
    const urlTitle = getByText('this is a title')
    const link = getByLabelText('shortened url') 
    const longLink = getByLabelText('long url')

    expect(urlTitle).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(longLink).toBeInTheDocument()
  })


})