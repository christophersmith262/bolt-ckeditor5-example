import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';

export default class BoltButtonEditing extends Plugin {

  init() {
    this._defineSchema();
    this._defineConverters();
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register('bolt-button', {
      isObject: true,
      allowWhere: '$block',
    });

    schema.register('bolt-button__title', {
      isLimit: true,
      allowIn: 'bolt-button',
      allowContentOf: '$block',
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.for('upcast').elementToElement({
        model: 'bolt-button',
        view: {
          name: 'bolt-button',
        }
    });
    conversion.for('dataDowncast').elementToElement({
        model: 'bolt-button',
        view: {
          name: 'bolt-button',
        }
    });
    conversion.for('editingDowncast').elementToElement({
        model: 'bolt-button',
        view: (modelElement, viewWriter) => {
          const element = viewWriter.createContainerElement('bolt-button');
          return toWidget(element, viewWriter, { label: 'Button' })
        }
    });

    conversion.for('upcast').elementToElement({
        model: 'bolt-button__title',
        view: {
          name: 'span',
        }
    });
    conversion.for('dataDowncast').elementToElement({
        model: 'bolt-button__title',
        view: {
          name: 'span',
        }
    });
    conversion.for('editingDowncast').elementToElement({
        model: 'bolt-button__title',
        view: (modelElement, viewWriter) => {
          const element = viewWriter.createEditableElement('span');
          return toWidgetEditable(element, viewWriter)
        }
    });
  }

  static get requires() {
    return [ Widget ];
  }

}
