import React from 'react';
import RickyAndMorty from './RickyAndMorty';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders context', () => {
   const component = render(<RickyAndMorty />)
   component.container.getElementsByClassName('row d-flex justify-content-center');
})
