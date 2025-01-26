import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../Component/ProductImageGallery'
import React from 'react'

describe('ProductImageGallery', () => {
  it('should render no images when the array is empty', () => {
    const {container} = render(<ProductImageGallery imageUrls={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
  it('should render images when the array is not empty', () => {
    const imageUrls = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ]
    render(<ProductImageGallery imageUrls={imageUrls} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url)
    })
    // expect(images[0]).toHaveAttribute('src', imageUrls[0])
  }) 
})