// FoalTS
import { FileSystem } from '../../file-system';
import { createHook } from './create-hook';

describe('createHook', () => {

  const fs = new FileSystem();

  beforeEach(() => fs.setUp());

  afterEach(() => fs.tearDown());

  function test(root: string) {

    describe(`when the directory ${root}/ exists`, () => {

      beforeEach(() => {
        fs
          .ensureDir(root)
          .cd(root)
          .copyMock('hook/index.ts', 'index.ts');
      });

      it('should render the templates in the proper directory.', () => {
        createHook({ name: 'test-fooBar' });

        fs
          .assertEqual('test-foo-bar.hook.ts', 'hook/test-foo-bar.hook.ts')
          .assertEqual('index.ts', 'hook/index.ts');
      });

      it('should create index.ts if it does not exist.', () => {
        fs.rmfile('index.ts');

        createHook({ name: 'test-fooBar' });

        fs.assertExists('index.ts');
      });

    });

  }

  test('src/app/hooks');
  test('hooks');
  test('');

});
