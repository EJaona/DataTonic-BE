
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_data')
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_data').insert([
        {
          name: "Enoka",
          username: 'Ejaona',
          password: 'pass123'
        },
        {
          name: "Bob",
          username: "BillBoy",
          password: "pass123"
        
        },
        {
          name: "Sasuke",
          username: "The_last_uchiha",
          password: "loveSakura"
        }
      ]);
    });
};
