// Homework 1
function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}
function modificator (func) {
    return func.bind(null, 'test', 'sample')
}

testFunc = modificator(sampleFunc)

testFunc()
VM362:2 sampleFunc: test | sample

//Homework 2
function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
    func.valueOf = function() {
        return func.toString().length
    }
}

modificator( sampleFunc )

sampleFunc()
VM474:2 Symbols in my code: 93

//Homework 3
