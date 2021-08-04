function test1()
{
//Enter Test code 1 here
}

function test2()
{
//Enter Test code 2 here
}

var cycleResults = document.getElementById('cycleResults');
var result = document.getElementById('result');
var btn = document.getElementById('btn');

// BENCHMARK ====================
btn.onclick = function runTests(){

  btn.setAttribute('disable', true);
	cycleResults.innerHTML = '';
  result.textContent = 'Tests running...';
  
  var suite = new Benchmark.Suite;

  // add tests
  suite
  .add('test1', test1)
  .add('test2', test2)
  // add listeners
  .on('cycle', function(event) {
    var result = document.createElement('li');
    result.textContent = String(event.target);
    
    document.getElementById('cycleResults')
    	.appendChild(result);
  })
  .on('complete', function() {
    result.textContent = 'Fastest is ' + this.filter('fastest').pluck('name');
    btn.setAttribute('disable', false);
  })
  // run async
  .run({ 'async': true });
};
