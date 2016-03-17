require('should');

var repofs = require('../');


describe('WorkingState', function() {

    describe('.isClean', function() {

        it('should true if workingState has not changes', function() {
            var workingState = repofs.WorkingState.createEmpty();
            workingState.isClean().should.equal(true);
        });

        it('should false if workingState has changes', function() {
            var workingState = repofs.decodeWorkingState({
                tree: {
                    'README.md': {
                        blobSize: 10,
                        sha: '...',
                        mode: '100644'
                    }
                },
                changes: {
                    'README.md': {
                        type: repofs.CHANGE.UPDATE
                    }
                }
            });
            workingState.isClean().should.equal(false);
        });

    });

});

