import { render } from '@testing-library/react';

import PomoTimer from './pomo-timer';

describe('PomoTimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PomoTimer />);
    expect(baseElement).toBeTruthy();
  });
});
