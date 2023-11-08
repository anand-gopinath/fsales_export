import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        /* replace below static data with api call */
      return [{
        id: 1,
        checked: false,
        headerName: "First Name",
        fieldName: "first_name",
        choices: ['John', 'brew']
      }, {
        id: 2,
        checked: false,
        headerName: "Last Name",
        fieldName: "last_name",
        choices: ['John Brew', 'Brew John']
      }, {
        id: 3,
        checked: false,
        headerName: "Email",
        fieldName: "email",
        choices: ['john_brew@gmail.com', 'brew_john@gmail.com']
      }
      ];
    }
});
