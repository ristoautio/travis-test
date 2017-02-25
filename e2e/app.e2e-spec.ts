import { TravisTestPage } from './app.po';

describe('travis-test App', () => {
  let page: TravisTestPage;

  beforeEach(() => {
    page = new TravisTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
