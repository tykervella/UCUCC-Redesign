import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PAGE } from '../utils/queries';
import PageContent from '../components/PageContent';

const AboutUs = () => {
  const { loading, error, data } = useQuery(QUERY_PAGE, {
    variables: { pageName: "AboutUs" },
  });

  const [pageText, setPageText] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (data && data.page) {
      setPageText(data.page.pageText);
      setPageTitle(data.page.pageTitle);
    }
  }, [data]);

  const handleEditClick = () => {
    setEditing(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <PageContent
        pageTitle={pageTitle}
        pageText={pageText}
        editing={editing}
        setEditing={setEditing}
      />
      {!editing && (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default AboutUs;
