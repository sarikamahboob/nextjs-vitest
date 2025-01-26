import { render, screen } from '@testing-library/react'
import ExpandableText from '../../Component/ExpandableText'
import React from 'react'
import userEvent from '@testing-library/user-event';

describe('ExpandableText', () => {
  const limit = 255;
  const longText = 'a'.repeat(limit + 1)
  const truncatedText = longText.substring(0, limit);
  it('should render full text when text is less than 255 characters', () => {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius sequi omnis magni. A vero architecto at temporibus iusto fugit dolores, similique autem veritatis? Ipsa fugiat quam distinctio ducimus maxime.'
    render(<ExpandableText text={text} />)
    const article = screen.getByText(text);
    expect(article).toBeInTheDocument()
  })
  it('should render truncated text when text is more than 255 characters', () => {
    render(<ExpandableText text={longText} />);
   const article = screen.getByText(truncatedText);
    expect(article).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/show more/i)
  })
   it("should expand text when show more button is clicked",async () => {
     render(<ExpandableText text={longText} />);
    
     const button = screen.getByRole("button");
     const user = userEvent.setup();
     await user.click(button);

     const text = screen.getByText(longText);
     expect(text).toBeInTheDocument();

     expect(button).toHaveTextContent(/show less/i);
   });
  it("should collapse text when show less button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole("button", {name: /show more/i});  
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", {name: /show less/i});
    await user.click(showLessButton);

    const text = screen.getByText(truncatedText);
    expect(text).toBeInTheDocument();

    expect(showMoreButton).toHaveTextContent(/show more/i);
  });
})