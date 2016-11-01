exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('pirates').insert({first_name: 'Long John', last_name: 'Silver', image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/TI-parrot.jpg/220px-TI-parrot.jpg"}),
        knex('pirates').insert({first_name: 'Captain J.', last_name: 'Flint', image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Treasure-island05.png/250px-Treasure-island05.png"}),
        knex('pirates').insert({first_name: 'Billy', last_name: 'Bones', image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TI-billy.jpg/220px-TI-billy.jpg"}),
      ]);
    });
};
