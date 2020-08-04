import React from 'React'
import UrlForm from './UrlForm'
import "@testing-library/jest-dom"
import {render, waitFor, fireEvent, getByPlaceholderText} from "@testing-library/react"

describe('UrlForm', () => {
  const mockForm = {
    title: 'this is a title',
    urlToShorten: 'https://unsplash.com/photos/YHXPbTj7Q9Q'
  }

  it('should display a default form', () => {
    const {getByText, getByPlaceholderText} = render(
      <UrlForm />
    )

    const titleInput = getByPlaceholderText('Title...')
    const urlInput = getByPlaceholderText('URL to Shorten...')
    const button = getByText('Shorten Please!')
    expect(titleInput).toBeInTheDocument()
    expect(urlInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should display a form', () => {
    const mockPostForm = jest.fn()
    const {getByText, getByPlaceholderText, getByDisplayValue, getByValue} = render(
      <UrlForm saveUrl={mockPostForm} />
    )

      const titleInput = getByPlaceholderText('Title...')
      const urlInput = getByPlaceholderText('URL to Shorten...')
      const button = getByText('Shorten Please!')
      fireEvent.change(titleInput, {target: {value: 'cool title'}})
      fireEvent.change(urlInput, {target: {value: 'https://unsplash.com/photos/YHXPbTj7Q9Q'}})
      expect(getByDisplayValue('cool title')).toBeInTheDocument()
      expect(getByDisplayValue('https://unsplash.com/photos/YHXPbTj7Q9Q')).toBeInTheDocument()
  })

  it('should display a new a form', () => {
    const mockPostForm = jest.fn()
    const {getByText, getByPlaceholderText, getByDisplayValue, getByValue} = render(
      <UrlForm saveUrl={mockPostForm} />
    )
      const titleInput = getByPlaceholderText('Title...')
      const urlInput = getByPlaceholderText('URL to Shorten...')
      const button = getByText('Shorten Please!')
      fireEvent.change(titleInput, {target: {value: 'cool title'}})
      fireEvent.change(urlInput, {target: {value: 'https://unsplash.com/photos/YHXPbTj7Q9Q'}})
      expect(getByDisplayValue('cool title')).toBeInTheDocument()
      expect(getByDisplayValue('https://unsplash.com/photos/YHXPbTj7Q9Q')).toBeInTheDocument()
      fireEvent.click(button)
      expect(mockPostForm).toHaveBeenCalled()
  })

})