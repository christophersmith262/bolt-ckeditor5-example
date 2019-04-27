import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import List from '@ckeditor/ckeditor5-list/src/list'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import CKEditorInspector from '@ckeditor/ckeditor5-inspector'
import BoltButton from './bolt-button/bolt-button'; 
import BoltButtonInsertButton from './bolt-button/bolt-button-insert-button'; 

import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import {toWidget, toWidgetEditable} from '@ckeditor/ckeditor5-widget/src/utils'
import Widget from '@ckeditor/ckeditor5-widget/src/widget'
import Command from '@ckeditor/ckeditor5-core/src/command'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

ClassicEditor
  .create(document.querySelector('#editor'), {
    plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, BoltButton, BoltButtonInsertButton ],
    toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'boltButton' ],
  })
  .then(editor => {
    CKEditorInspector.attach('editor', editor)
    window.editor = editor
  })
  .catch(error => {
    console.error(error.stack)
  })
