var faker = require('faker')
var CPF = require('gerador-validador-cpf')

export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            CPF: CPF.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85999999999',
            adress: {
                postalcode: '60416200',
                street: 'Rua Professor Costa Mendes',
                number: '306',
                details: 'Entrada 42',
                district: 'Bom Futuro',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}