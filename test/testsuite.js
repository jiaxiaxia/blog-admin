casper.
start( url ).
then(function(){

  // do something
  casper.click('button#open-dialog');

  // Take a screenshot of the UI component
  phantomcss.screenshot('#the-dialog', 'a screenshot of my dialog');

});
