import React from 'react';
import { useParams } from 'react-router-dom';

import './ItemPage.scss';

export function ItemPage() {
  const { id } = useParams();

  return (
    <div className='ItemPage'>
      <pre>{JSON.stringify(id)}</pre>
    </div>
  );
}
