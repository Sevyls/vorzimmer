import { VorzimmerPage } from './app.po';

describe('vorzimmer App', () => {
  let page: VorzimmerPage;

  beforeEach(() => {
    page = new VorzimmerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
