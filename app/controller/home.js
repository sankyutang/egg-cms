'use strict';

const AV = require('leancloud-storage');

module.exports = function* homeController() {
  this.body = 'hi, egg';
  // console.log('AV = ', AV);
  // AV.init({
  //   appId: 'uttotj4l99opicN4oWBOnQze',
  //   appKey: 'OmUJqv3PMU8NGuL1bs4ajqyN',
  // });

  // const TestObject = AV.Object.extend('TestObject');
  // const testObject = new TestObject();
  // testObject.save({
  //   words: 'Hello World!',
  // }).then(function(object) {
  //   console.log('LeanCloud Rocks!');
  // });
};
