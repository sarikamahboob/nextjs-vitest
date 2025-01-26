import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../Component/TermsAndConditions'
import React from 'react'
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading", { level: 1 }),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    }
  }
  it("should render with correct text and initial state", () => {
    const {heading, checkbox, button} = renderComponent()

    expect(heading).toHaveTextContent(/terms and conditions/i);

    expect(checkbox).not.toBeChecked();
    
    // const button = screen.getByRole("button", {name: /submit/i});
    expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });
  it('should enable submit button when checkbox is checked', async () => {
    const { heading, checkbox, button } = renderComponent();

    const user = userEvent.setup();
    await user.click(checkbox)
    
    expect(button).toBeEnabled()
  })
})