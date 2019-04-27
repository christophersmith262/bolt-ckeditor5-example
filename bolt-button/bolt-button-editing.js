import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import Widget from '@ckeditor/ckeditor5-widget/src/widget'
import {toWidget, toWidgetEditable} from '@ckeditor/ckeditor5-widget/src/utils'

export default class BoltButtonEditing extends Plugin {

  init() {
    this._defineSchema()
    this._defineConverters()
  }

  _defineSchema() {
    const schema = this.editor.model.schema

    schema.register('bolt-button', {
      isObject: true,
      allowWhere: '$block',
      allowAttributes: ['size', 'color'],
    })

    schema.register('bolt-button__title', {
      isLimit: true,
      allowIn: 'bolt-button',
      allowContentOf: '$block',
    })
  }

  _defineConverters() {
    const conversion = this.editor.conversion

    conversion.for('upcast').elementToElement({
      model: 'bolt-button',
      view: 'bolt-button',
    })
    conversion.for('dataDowncast').elementToElement({
      model: 'bolt-button',
      view: 'bolt-button',
    })
    conversion.for('editingDowncast').elementToElement({
      model: 'bolt-button',
      view: (modelElement, viewWriter) => {
        const element = viewWriter.createContainerElement('bolt-button')
        return toWidget(element, viewWriter, { label: 'Button' })
      }
    })

    conversion.attributeToAttribute({
      model: {
        key: 'color',
        values: ['primary', 'secondary', 'text'],
      },
      view: {
        primary: { name: 'bolt-button', key: 'color', value: 'primary' },
        secondary: { name: 'bolt-button', key: 'color', value: 'secondary' },
        text: { name: 'bolt-button', key: 'color', value: 'text' },
      }
    })

    conversion.attributeToAttribute({
      model: {
        key: 'size',
        values: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
      view: {
        xsmall: { name: 'bolt-button', key: 'size', value: 'xsmall' },
        small: { name: 'bolt-button', key: 'size', value: 'small' },
        medium: { name: 'bolt-button', key: 'size', value: 'medium' },
        large: { name: 'bolt-button', key: 'size', value: 'large' },
        xlarge: { name: 'bolt-button', key: 'size', value: 'xlarge' },
      }
    })

    conversion.for('upcast').elementToElement({
      model: 'bolt-button__title',
      view: 'span',
    })
    conversion.for('dataDowncast').elementToElement({
      model: 'bolt-button__title',
      view: 'span',
    })
    conversion.for('editingDowncast').elementToElement({
      model: 'bolt-button__title',
      view: (modelElement, viewWriter) => {
        const element = viewWriter.createEditableElement('span')
        return toWidgetEditable(element, viewWriter)
      }
    })
  }

  static get requires() {
    return [Widget]
  }

}
