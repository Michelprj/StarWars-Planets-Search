import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const renderTesting = (ui: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(ui),
  };
};
