import Ember from 'ember';


export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  didUpdateAttrs() {
    this._super(...arguments);
  },

  actions: {
    openModel(event) {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";

    },
    closeModel(event) {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    },
    udpateChecked({
        id,
        checked
      }) {
        var selectedRow = this.data.filter((sh) => {
          return parseInt(sh.id) === parseInt(id)
        })[0];
        Ember.set(selectedRow, 'checked', checked);
        //return true;
    },
    submitData() {
        console.log("final data", this.data);
        //Do submission - API
    }
  }
});
