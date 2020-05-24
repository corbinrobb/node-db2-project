
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'JH4TB2H26CC000000', make: 'Acura', model: 'MDX', mileage: 100, transmission: 'automatic', title: 'clean'},
        { VIN: 'WAUFFAFM3CA000000', make: 'Audi', model: 'A3', mileage: 2000, transmission: 'manual', title: 'salvaged'},
        { VIN: 'WBAUP7C57CV000000', make: 'BMW', model: '128i', mileage: 10000, transmission: 'manual', title: 'clean'}
      ]);
    });
};
