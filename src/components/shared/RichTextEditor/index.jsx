import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles/styles.css';

const RichTextEditor = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      //   data={editorData}
      //   onChange={handleChange}
      config={{
        // plugins: [Underline, ...ClassicEditor.defaultConfig.plugins],
        toolbar: [
          'bold',
          'italic',
          'underline',
          'numberedList',
          'link',
          'uploadImage',
        ],
        toolbarLocation: 'bottom',
        // You might need to extend or build a custom build to add more plugins if required
      }}
      style={{ minHeight: '90px' }}
    />
  );
};

export default RichTextEditor;
