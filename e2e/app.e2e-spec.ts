import { PocBootstrapPage } from './app.po';

describe('poc-bootstrap App', () => {
  let page: PocBootstrapPage;

  beforeEach(() => {
    page = new PocBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
