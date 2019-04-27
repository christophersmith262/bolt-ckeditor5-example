import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import Model from '@ckeditor/ckeditor5-ui/src/model'

import { createDropdown, addListToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils'

import Collection from '@ckeditor/ckeditor5-utils/src/collection'

export default class BoltButtonUI extends Plugin {

  init() {
    this._styleSelectorComponent()
    this._sizeSelectorComponent()
  }

  _styleSelectorComponent() {
    const editor = this.editor
    const t = editor.t
    const defaultTitle = t('Choose Style')
    const dropdownTooltip = t('Button Style')

    // Register UI component.
    editor.ui.componentFactory.add('bolt-button-style', locale => {
      const titles = {},
        itemDefinitions = new Collection(),
        buttonStyleCommand = editor.commands.get('boltButtonStyle'),
        options = {
          'primary': 'Primary',
          'secondary': 'Secondary',
          'text': 'Text',
        }

      for (let option in options) {
        const def = {
          type: 'button',
          model: new Model({
            label: options[option],
            withText: true,
            commandValue: option,
            commandName: 'boltButtonStyle',
            isOn: true,
          })
        }

        def.model.bind('isOn').to(buttonStyleCommand, 'value', value => value == option)
        itemDefinitions.add(def)
        titles[option] = options[option]
      }

      const dropdownView = createDropdown(locale)
      addListToDropdown(dropdownView, itemDefinitions)

      dropdownView.buttonView.set({
        isOn: true,
        withText: true,
        tooltip: dropdownTooltip
      })

      dropdownView.set('isEnabled', true)

      dropdownView.buttonView.bind('label').to(buttonStyleCommand, 'value', value => {
        return titles[value] ? titles[value] : defaultTitle
      })

      this.listenTo(dropdownView, 'execute', evt => {
        editor.execute(evt.source.commandName, evt.source.commandValue ? { value: evt.source.commandValue } : undefined)
        editor.editing.view.focus()
      })

      return dropdownView
    })
  }

  _sizeSelectorComponent() {
    const editor = this.editor
    const t = editor.t
    const defaultTitle = t('Choose Size')
    const dropdownTooltip = t('Button Size')

    // Register UI component.
    editor.ui.componentFactory.add('bolt-button-size', locale => {
      const titles = {},
        itemDefinitions = new Collection(),
        buttonSizeCommand = editor.commands.get('boltButtonSize'),
        options = {
          'xsmall': 'xsmall',
          'small': 'small',
          'medium': 'medium',
          'large': 'large',
          'xlarge': 'xlarge',
        }

      for (let option in options) {
        const def = {
          type: 'button',
          model: new Model({
            label: options[option],
            withText: true,
            commandValue: option,
            commandName: 'boltButtonSize',
            isOn: true,
          })
        }

        def.model.bind('isOn').to(buttonSizeCommand, 'value', value => value == option)
        itemDefinitions.add(def)
        titles[option] = options[option]
      }

      const dropdownView = createDropdown(locale)
      addListToDropdown(dropdownView, itemDefinitions)

      dropdownView.buttonView.set({
        isOn: true,
        withText: true,
        tooltip: dropdownTooltip
      })

      dropdownView.set('isEnabled', true)

      dropdownView.buttonView.bind('label').to(buttonSizeCommand, 'value', value => {
        return titles[value] ? titles[value] : defaultTitle
      })

      this.listenTo(dropdownView, 'execute', evt => {
        editor.execute(evt.source.commandName, evt.source.commandValue ? { value: evt.source.commandValue } : undefined)
        editor.editing.view.focus()
      })

      return dropdownView
    })
  }
}
