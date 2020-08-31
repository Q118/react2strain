import React from 'react';
import Strain from './Strain';

export default function strainList({ strains }) {
    return strains.map((strain) => {
        return <Strain key={strain.id} strain={strain} />;
    });
}
