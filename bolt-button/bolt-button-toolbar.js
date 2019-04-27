import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import WidgetToolbarRepository from '@ckeditor/ckeditor5-widget/src/widgettoolbarrepository'
import BoltButtonUI from './bolt-button-ui'

export default class BoltButtonToolbar extends Plugin {
  static get requires() {
    return [WidgetToolbarRepository, BoltButtonUI]
  }

  static get pluginName() {
    return 'BoltButtonToolbar'
  }

  afterInit() {
    const editor = this.editor
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository)

    widgetToolbarRepository.register('bolt-button', {
      items: ['bolt-button-size', 'bolt-button-style'],
      getRelatedElement: selection => {
	const viewElement = selection.getSelectedElement()

	if (viewElement) {
          return viewElement
	}

	return null
      },
    })
  }
}
