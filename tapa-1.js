function foo(buz) {
  if (timeForBus) {
    buz();
  }
}

function buz() {
  console.log("buz");
}
foo(buz);
