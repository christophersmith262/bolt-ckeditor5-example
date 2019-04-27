import BoltButtonEditing from './bolt-button-editing'
import BoltButtonToolbar from './bolt-button-toolbar'
import BoltButtonInsertCommand from './bolt-button-insert-command'
import BoltButtonStyleCommand from './bolt-button-style-command'
import BoltButtonSizeCommand from './bolt-button-size-command'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

export default class BoltButton extends Plugin {

  init() {
    this.editor.commands.add('insertBoltButton', new BoltButtonInsertCommand(this.editor))
    this.editor.commands.add('boltButtonStyle', new BoltButtonStyleCommand(this.editor))
    this.editor.commands.add('boltButtonSize', new BoltButtonSizeCommand(this.editor))
  }

  static get requires() {
    return [BoltButtonEditing, BoltButtonToolbar]
  }

}
