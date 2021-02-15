INSERT INTO user (id, username, email, passhash, level, created_at, updated_at) VALUES
(
  ('admin'),
  ('admin'),
  ('admin@admin.com'),
  ('admin-dontTryToLogInAsMe'),
  (2),
  ('2021-02-12 05:55:00.000'),
  ('2021-02-12 05:55:00.000')
);

INSERT INTO category (id, name, created_at, updated_at) VALUES
(1, 'Aliens', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, 'Cryptids', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, 'Ghosts', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

INSERT INTO type (id, name, created_at, updated_at) VALUES
(1, 'Museum', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, 'Cemetary', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, 'Historical Site', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(4, 'Sighting Location', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(5, 'Asylum', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(6, 'Prison', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(7, 'Walking Tour', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

INSERT INTO attraction (id, name, latitude, longitude, category_id, description, owner, created_at, updated_at) VALUES
('1', 'spooky place 1', '39.952414', '-75.146301', 3, 'cool description of spooky place 1', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('2', 'spooky place 2', '38.952414', '-74.146301', 2, 'cool description of spooky place 2', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('3', 'spooky place 3', '38.952414', '-74.146301', 1, 'cool description of spooky place 3', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('4', 'spooky place 4', '38.952414', '-74.146301', 3, 'cool description of spooky place 4', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

INSERT INTO attraction_type (id, attraction_id, type_id, created_at, updated_at) VALUES
(1, '1', 7, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, '2', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, '3', 4, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(4, '4', 2, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');