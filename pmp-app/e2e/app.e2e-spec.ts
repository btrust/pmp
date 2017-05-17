import { PmpAppPage } from './app.po';

describe('pmp-app App', () => {
  let page: PmpAppPage;

  beforeEach(() => {
    page = new PmpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
