const db = require('../data/db-config.js')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id });
}


function findSteps(id) {
    return db( 'steps as stp')
    .join('schemes as sch', 'sch.id', 'stp.scheme_id',)
    .select('sch.scheme_name', 'stp.step_number', 'stp.instructions', )
    .where({ scheme_id: id });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme);
}


function update(updates, id) {
    return db('schemes')
    .where({ id })
    .update(updates);
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .delete();
}

module.exports = {
find, 
findById,
findSteps,
add,
update,
remove
}