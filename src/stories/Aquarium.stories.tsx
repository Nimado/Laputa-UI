import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Aquarium } from "../sections/tour/aquarium/Aquarium";

storiesOf('Pages/Sections/Aquarium', module)
    .add(
        'Blue',
        () => (
            <Aquarium />
        )
    );
