INSERT INTO user (id, username, email, passhash, level, created_at, updated_at) VALUES
(
  ('admin'),
  ('admin'),
  ('admin@admin.com'),
  ('admin-dontTryToLogInAsMe'),
  (2),
  ('2021-02-12 05:55:00.000'),
  ('2021-02-12 05:55:00.000')
),
(
  ('admin_Giamo'),
  ('Giamo'),
  ('Giamo@admin.com'),
  ('$2y$10$t/GtNX0hDkkYeW4oacEzZ.i/BW0sQ0hQPIcuUZ1JSu./rYrxBhCT.'),
  (2),
  ('2021-02-12 05:55:00.000'),
  ('2021-02-12 05:55:00.000')
),
(
  ('admin_Rae'),
  ('Rae'),
  ('Rae@admin.com'),
  ('$2y$12$PPZJf0y5GoBvEgYWQnns0Olf2BVGAfd.bNoOfWPKdivxPgcewgRpa'),
  (2),
  ('2021-02-12 05:55:00.000'),
  ('2021-02-12 05:55:00.000')
);

INSERT INTO category (id, name, created_at, updated_at) VALUES
(1, 'Aliens', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, 'Cryptids', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, 'Hauntings', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(4, 'Witches', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

INSERT INTO type (id, name, created_at, updated_at) VALUES
(1, 'Museum', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, 'Cemetery', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, 'Historical Site', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(4, 'Sighting Location', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(5, 'Asylum', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(6, 'Prison', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(7, 'Walking Tour', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

INSERT INTO attraction (id, name, lat, lng, category_id, description, owner, created_at, updated_at) VALUES
('1', 'Salem Witch Museum', '42.52394', '-70.89112', 4, 'Life-size stage sets, exhibits & tours exploring the 1692 Salem witch trials, plus witchcraft today.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('2', 'Eastern State Penitentiary', '39.9685583885842', '-75.17266480208939', 3, 'Eastern State Penitentiary was once the most famous and expensive prison in the world, but stands today in ruin, a haunting world of crumbling cellblocks and empty guard towers.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('3', 'International Cryptozoology Museum', '43.65181408725964', '-70.29041363096641', 2, 'Featuring a wide range of exhibitions from rare, one-of-a-kind scientific, zoological specimens to popular cultural homages to the relevant anthropological and psychological acknowledgements of the sightings and folk traditions to be found within hominology and cryptozoology.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('4', 'Cecil Hotel', '34.04460677366638', '-118.250819234668', 3, 'This historic hotel has been the site of many unexplained deaths and once was the home of Richard Ramirez, the infamous Night Stalker of LA', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('5', 'International UFO Museum & Reasearch Center', '33.39387600931828', '-104.52289046255653', 1, 'The International UFO Museum & Research Center at Roswell, New Mexico was organized to inform the public about what has come to be known as "The Roswell Incident." The Museum is a non-profit 501(c)(3) corporation dedicated to the collection and preservation of materials and information in written, audio and visual formats that are related to the 1947 Roswell Incident and other unexplained phenomena related to UFO research.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('6', 'St Louis Cemetery No. 1', '29.959558781907717', '-90.07148621779142', 3, 'Burial site of voodoo queen Marie Laveau & other historical notables in 18th- & 19th-century vaults.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('7', 'Trans-Allegheny Lunatic Asylum', '39.038841478852845', '-80.47126017341711', 3, 'This National Historic Landmark served as a sanctuary for the mentally ill beginning in the mid-1800s. This 160 year old asylum holds fascinating stories of Civil War raids, a gold robbery, the "curative" effects of architecture, and the efforts of determined individuals to help better the lives of the mentally ill. Tour this nationally recognized historic landmark and see how it left a lasting impression on local and national history. We offer a variety of historic and paranormal tours during our season.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('8', 'Skinwalker Ranch', '40.25871560553603', '-109.8877792445512', 1, 'Recognized as the most scientifically studied paranormal hotspot on the planet, Skinwalker Ranch is a 512 acre secure site that has been monitored for decades with armed security and surveillance 24/7/365. This remote location was involved with a Pentagon funded black budget project studying UFO activity, cattle mutilations and strange phenomena, and is also known as a living laboratory for studying other intelligences and possible interdimensional phenomena. Please note that Skinwalker Ranch is closed to the public and does not allow tours.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('9', 'Bridgewater Triangle', '41.99185224072833', '-70.96988160989879', 2, 'Located in southeastern Massachusetts is the Bridgewater Triangle, an area of about 200 square miles, that has been the site of legends and curses for centuries, and has been said to be called home to strange phenomena including ghosts, Bigfoot, UFOs, and strange creatures. Roughly bounded by the towns of Rehoboth, Freetown, and Abington, the area includes the Hockomock Swamp Wildlife Management Area and the Freetown-Fall River State Forest.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('10', 'Ghosts of Gettysburg Walking Tours', '39.82713802854362', '-77.23128918689176', 3, 'All ghost tours are led by guides in period-dress carrying candlelit lanterns. The tours are comfortably paced walking tours through downtown Gettysburg. Our tours are based on storytelling, combining the history of Gettysburg and the battle that took place here, with mysterious tales of the still lurking dead.', 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
('11', 'Gettysburg, Pennsylvania', '39.87518572528092', '-77.2238908875531', 3, 'Gettysburg is considered to be one of the most haunted places in America. The Battle of Gettysburg claimed so many lives and has undoubtedly left its mark on the land, but there have been other deaths and tragedies here too which have led to hauntings.' 'admin', '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');


INSERT INTO attraction_type (id, attraction_id, type_id, created_at, updated_at) VALUES
(1, '1', 1, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(2, '2', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(3, '2', 6, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(4, '3', 1, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(5, '4', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(6, '5', 1, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(7, '6', 2, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(8, '6', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(9, '7', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(10, '7', 5, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(11, '8', 4, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(12, '9', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(13, '9', 4, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(14, '10', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(15, '10', 7, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000'),
(16, '11', 3, '2021-02-12 05:55:00.000', '2021-02-12 05:55:00.000');

