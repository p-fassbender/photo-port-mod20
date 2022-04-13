import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory; // destructure props even more, but currentCategory.name and currentCategory.description work too
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={name} />
        </section>
    );
}

export default Gallery;