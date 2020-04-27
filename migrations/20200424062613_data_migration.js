
exports.up = function(knex) {
    return knex.schema.createTable('company_data', data => {

        data.increments()
    
        data
            .string('company', 123)
            .notNullable()
            .unique()
    
        data
            .integer('success')
            .unsigned()
            .notNullable()
        data
            .integer('error')
            .unsigned()
            .notNullable()
        data
            .integer('warning')
            .unsigned()
            .notNullable()
    
        data
            .string('relationship_status', 123)
            .notNullable()
        
        data
            .blob('lost_transactions')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('data')
};
