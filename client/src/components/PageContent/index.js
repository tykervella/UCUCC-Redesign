import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_PAGE } from '../../utils/mutations';

const PageContent = ({ pageText, pageTitle, editing, setEditing }) => {
  const [editedTitle, setEditedTitle] = useState(pageTitle);
  const [editedText, setEditedText] = useState(pageText);

  useEffect(() => {
    setEditedTitle(pageTitle);
  }, [pageTitle]);

  useEffect(() => {
    setEditedText(pageText);
  }, [pageText]);


  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const [updatePage] = useMutation(UPDATE_PAGE);

  const handleSaveChanges = async () => {
    try {
        await updatePage({
            variables: {
                pageName: "AboutUs",
                pageTitle: editedTitle,
                pageText: editedText
            }
        });
        setEditing(false);
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
};


  const handleGoBack = () => {
    setEditing(false);
  };

  if (editing) {
    return (
      <div>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={editedTitle} onChange={handleTitleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} value={editedText} onChange={handleTextChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        <Button variant="secondary" onClick={handleGoBack}>Go Back</Button>
      </div>
    );
  }

  return (
    <div>
      <h1>{pageTitle}</h1>
      {pageText.split('\n').map((text, i) => <p key={i}>{text}</p>)}
    </div>
  );
};

export default PageContent;
