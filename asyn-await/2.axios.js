const axios = require('axios')

class MinhaClasse {
    async meuMetodo() {
        const result = await axios.get('/').then(response => response.data)
        return result
    }
}