import { TweetbufferPage } from './app.po';

describe('tweetbuffer App', function() {
  let page: TweetbufferPage;

  beforeEach(() => {
    page = new TweetbufferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
