import Command from '@ckeditor/ckeditor5-core/src/command';
import BoltButtonEditing from './bolt-button-editing';
import BoltButtonUI from './bolt-button-ui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class BoltButton extends Plugin {

  init() {
    this.editor.commands.add( 'insertBoltButton', new InsertBoltButtonCommand( this.editor ) );
  }

  static get requires() {
    return [ BoltButtonEditing, BoltButtonUI ];
  }

}

class InsertBoltButtonCommand extends Command {
    execute() {
      this.editor.model.change( writer => {
          this.editor.model.insertContent( createBoltButton( writer ) );
      } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'bolt-button' );

        this.isEnabled = allowedIn !== null;
    }
}

function createBoltButton( writer ) {
  const boltButton = writer.createElement( 'bolt-button' );
  const boltButtonTitle = writer.createElement( 'bolt-button__title' );

  writer.append(writer.createText('change me!'), boltButtonTitle);
  writer.append(boltButtonTitle, boltButton);

  return boltButton;
}
