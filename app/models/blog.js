import DS from 'ember-data';

const {Model, attr, hasMany} = DS;

export default DS.Model.extend({
    name: attr('string'),
    url: attr('string'),
    isSelected: attr('boolean'),

    select: function () {
        this.set('isSelected', true);
        this.save();
    },
    unselect: function () {
        this.set('isSelected', false);
        this.save();
    }
});
