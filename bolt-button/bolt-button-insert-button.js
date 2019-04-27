import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import BoltButton from './bolt-button'

export default class InsertBoltButton extends Plugin {

  init() {
    const editor = this.editor,
      t = editor.t

    editor.ui.componentFactory.add('boltButton', locale => {
      const command = editor.commands.get('insertBoltButton'),
        buttonView = new ButtonView(locale)

      buttonView.set({
          label: t('Button'),
          withText: true,
          tooltip: true
      })

      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled')
      this.listenTo(buttonView, 'execute', () => editor.execute('insertBoltButton'))
      return buttonView
    })

  }

  static get requires() {
    return [BoltButton]
  }

}
