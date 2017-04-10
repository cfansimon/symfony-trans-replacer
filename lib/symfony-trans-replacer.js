'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'symfony-trans-replacer:replace': () => this.paste()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  paste() {
    let editor = atom.workspace.getActiveTextEditor();
    
    if (editor) {
      let clipboard = atom.clipboard;
      let clipboardText = clipboard.read();
      
      if (clipboardText) {
        let transItems = clipboardText.split("\n");
        let selection = editor.getLastSelection();
        let selectedText = selection.getText();
        
        let replacedText = selectedText;
        
        for (var i in transItems) {
          let transItemSplit = transItems[i].split(":");
          let transKey = transItemSplit[0].replace(/(^\s*)|(\s*$)/g, "");
          let transValue = transItemSplit[1].replace(/(^\s*)|(\s*$)/g, "");
          replacedText = replacedText.replace(transValue, transKey);
          console.log(transKey);
          console.log(transValue);
          console.log(replacedText);
        }
        
        selection.insertText(replacedText);
        
      } else {
        console.log('clipboard no data');
      }
        
    } else {
      console.log('no active text editor');
    }
  }

};
