import { expect } from 'chai';

import slugizoid from '../index';

describe('slugizoid', () => {
  describe('.toString', () => {
    it('should be a function with arity 1', () => {
      // Arrange
      const slug = slugizoid('pUll_reQUeSt');

      // Assert
      expect(slug.toString)
        .to.be.a('function')
        .with.lengthOf(1);
    });

    it('should return a singular space deliminated pascal case by default', () => {
      // Arrange
      const slug = slugizoid('pull_request');

      // Assert
      expect(slug.toString()).to.equal('Pull Request');
    });

    describe('options', () => {
      describe('.plural', () => {
        it('should allow pluralized readable verison of slug', () => {
          // Arrange
          const slug = slugizoid('pull_request');

          // Assert
          expect(slug.toString({ plural: true })).to.equal('Pull Requests');
        });
      });

      describe('.format', () => {
        it('should allow formating of camel 🐫', async () => {
          // Arrange
          const slug = slugizoid('pull_request');

          // Assert
          expect(slug.toString({ format: 'camel' })).to.equal('pullRequest');
        });

        it('should allow formating of camel 🐫  and plural', async () => {
          // Arrange
          const slug = slugizoid('pull_request');

          // Assert
          expect(slug.toString({ format: 'camel', plural: true })).to.equal(
            'pullRequests'
          );
        });
      });
    });
  });

  describe('slugify', () => {
    it('should be a function with artiy 0', () => {
      // Arrange
      const slug = slugizoid('pull_request');

      // Assert
      expect(slug.slugify)
        .to.be.a('function')
        .with.lengthOf(0);
    });

    it('should always return the singular, _ deliminated verison of slug', () => {
      // Arrange
      const slug = slugizoid('pull-requests');

      // Act
      const result = slug.slugify();

      // Assert
      expect(result.includes('-')).to.be.false;
      expect(result.includes('requests')).to.be.false;
      expect(result).to.be.equal('pull_request');
    });
  });

  describe('.urlify', () => {
    it('should be a function with arity 0', () => {
      // Arrange
      const slug = slugizoid('pull_request');

      // Assert
      expect(slug.urlify)
        .to.be.a('function')
        .with.lengthOf(0);
    });

    it('should always return the pluralized, - deliminated verions of slug', () => {
      // Arrange
      const slug = slugizoid('pull_request');

      // Act
      const result = slug.urlify();

      // Assert
      expect(result.includes('_')).to.be.false;
      expect(result).to.be.equal('pull-requests');
    });
  });

  describe('creation', () => {
    const expectedSlug = 'pull_request';

    describe('plural', () => {
      it('_ deliminated', () => {
        // Arrange
        const slug = slugizoid('pull_requests');

        // Assert
        expect(slug.slugify()).to.be.equal(expectedSlug);
      });

      it('- deliminated', () => {
        // Arrange
        const slug = slugizoid('pull-requests');

        // Assert
        expect(slug.slugify()).to.be.equal(expectedSlug);
      });
    });

    describe('singular', () => {
      it('_ deliminated', () => {
        // Arrange
        const slug = slugizoid('pull_request');

        // Assert
        expect(slug.slugify()).to.be.equal(expectedSlug);
      });

      it('- deliminated', () => {
        // Arrange
        const slug = slugizoid('pull-request');

        // Assert
        expect(slug.slugify()).to.be.equal(expectedSlug);
      });
    });
  });

  describe('comparison', () => {
    describe('.equals', () => {
      it('should be a function with arity of 1', () => {
        // Arrange
        const slug = slugizoid();

        // Assert
        expect(slug.equals)
          .to.be.a('function')
          .with.lengthOf(1);
      });

      it('should match singular underscore deliminated version of slug', () => {
        // Arrange
        const slug = slugizoid('pull-request');

        // Assert
        expect(slug.equals('pull-requests')).to.be.true;
        expect(slug.equals('pull_requests')).to.be.true;
        expect(slug.equals('pull_request')).to.be.true;
        expect(slug.equals('pull-request')).to.be.true;
        expect(slug.equals('pull')).to.be.false;
      });
    });
  });
});
