export class FooPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Foo-app p')).getText(); }
}
