
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company_data')
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('company_data').insert([
        {
          company: "Amazon",
          success: 60579569,
          error: 15832,
          warning: 13122,
          relationship_status: "good",
          lost_transactions:' 10, 7, 15, 5, 3, 15, 8, 4, 10, 12, 5, 7, 28, 3 '
          
        },
        {
          company: "Microsoft",
          success: 59931014,
          error: 13223,
          warning: 11122,
          relationship_status: "fair",
          lost_transactions: '5, 8, 5, 12, 10, 5, 7, 8, 13, 5, 7, 15, 11, 10 '
        },
        {
          company: "Logitech",
          success: 51579569,
          error: 11832,
          warning: 6122,
          relationship_status: "poor",
          lost_transactions: '0, 20, 5, 28, 23, 20, 28, 25, 30, 28, 35, 28, 28, 31, 28, 5, 33, 15 '
        },
        {
          company: "Intel",
          success: 36131216,
          error: 8223,
          warning: 6122,
          relationship_status: "good",
          lost_transactions: ' 3, 5, 4, 12, 10, 4, 8, 13, 5, 7, 15, 11, 10 '
        },
        {
          company: "Google",
          success: 42656124,
          error: 15832,
          warning: 11122,
          relationship_status: "good",
          lost_transactions: ' 12, 10, 15, 17, 13, 15, 18, 12, 22, 15, 16, 23, 5, 2 '
        }
      ]);
    });
};
