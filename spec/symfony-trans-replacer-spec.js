'use babel';

import SymfonyTransReplacer from '../lib/symfony-trans-replacer';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SymfonyTransReplacer', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('symfony-trans-replacer');
    let editor = atom.workspace.buildTextEditor();
    spyOn(atom.workspace, 'getActiveTextEditor').andReturn(editor);
  });

  describe('when the symfony-trans-replacer:replace event is triggered', () => {
    

  });
});
