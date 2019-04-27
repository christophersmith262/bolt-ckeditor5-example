import Command from '@ckeditor/ckeditor5-core/src/command'

export default class InsertBoltButtonCommand extends Command {
    execute() {
      this.editor.model.change(writer => {
        this.editor.model.insertContent(createBoltButton(writer))
      })
    }

    refresh() {
      const model = this.editor.model,
        selection = model.document.selection,
        allowedIn = model.schema.findAllowedParent(selection.getFirstPosition(), 'bolt-button')
      this.isEnabled = allowedIn !== null
    }
}

function createBoltButton(writer) {
  const boltButton = writer.createElement('bolt-button'),
    boltButtonTitle = writer.createElement('bolt-button__title')

  writer.append(writer.createText('change me!'), boltButtonTitle)
  writer.append(boltButtonTitle, boltButton)

  return boltButton
}
