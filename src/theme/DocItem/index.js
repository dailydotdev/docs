import React from 'react';
import DocItem from '@theme-original/DocItem';
import BreadcrumbSchema from '@site/src/components/BreadcrumbSchema';

export default function DocItemWrapper(props) {
  return (
    <>
      <BreadcrumbSchema />
      <DocItem {...props} />
    </>
  );
}
