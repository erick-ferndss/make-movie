const readline = require('readline-sync')

function start(){
    const content = {}
    
    content.searchTerm = askandReturnSearchTerm()
    content.prefix = askReturnPrefix()
    function askReturnPrefix(){
        const prefixes = ['Quem foi', 'O que foi', 'A historia de']
        const selPrefixIndex = readline.keyInSelect(prefixes, 'escolha uma opção')
        const selPrefixText = prefixes[selPrefixIndex]

        return selPrefixText
    }

    function askandReturnSearchTerm(){
        return readline.question('defina um termo de pesquisa no wikipedia: ')
    }
    console.log(content)
}

start()