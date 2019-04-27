import Command from '@ckeditor/ckeditor5-core/src/command'

export default class BoltButtonStyleCommand extends Command {

  refresh() {
    const element = this.editor.model.document.selection.getSelectedElement()
    this.isEnabled = !!element && element.name == 'bolt-button'
    this.value = this.isEnabled && (element.getAttribute('color') || 'primary')
  }

  execute(options) {
    const model = this.editor.model,
      document = model.document,
      modelElement = options.value

    model.change(writer => {
      const element = this.editor.model.document.selection.getSelectedElement()

      if (element.name == 'bolt-button') {
        writer.setAttribute('color', modelElement, element)
      }
    })
  }
}
