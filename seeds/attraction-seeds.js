const { Attraction } = require('../models');

const attractionData = [
    {
        id: '1',
        name: 'Salem Witch Museum',
        lat: '42.52394',
        lng: '-70.89112',
        category_id: 4,
        description: 'Life-size stage sets, exhibits & tours exploring the 1692 Salem witch trials, plus witchcraft today.',
        owner: 'admin'
    },
    {
        id: '2',
        name: 'Eastern State Penitentiary',
        lat: '39.9685583885842',
        lng: '-75.17266480208939',
        category_id: 3,
        description: 'Eastern State Penitentiary was once the most famous and expensive prison in the world, but stands today in ruin, a haunting world of crumbling cellblocks and empty guard towers.',
        owner: 'admin'
    },
    {
        id: '3',
        name: 'International Cryptozoology Museum',
        lat: '43.65181408725964',
        lng: '-70.29041363096641',
        category_id: 2,
        description: 'Featuring a wide range of exhibitions from rare, one-of-a-kind scientific, zoological specimens to popular cultural homages to the relevant anthropological and psychological acknowledgements of the sightings and folk traditions to be found within hominology and cryptozoology.',
        owner: 'admin'
    },
    {
        id: '4',
        name: 'Cecil Hotel',
        lat: '34.04460677366638',
        lng: '-118.250819234668',
        category_id: 3,
        description: 'This historic hotel has been the site of many unexplained deaths and once was the home of Richard Ramirez, the infamous Night Stalker of LA',
        owner: 'admin'
    },
    {
        id: '5',
        name: 'International UFO Museum & Reasearch Center',
        lat: '33.39387600931828',
        lng: '-104.52289046255653',
        category_id: 1,
        description: 'The International UFO Museum & Research Center at Roswell, New Mexico was organized to inform the public about what has come to be known as "The Roswell Incident." The Museum is a non-profit 501(c)(3) corporation dedicated to the collection and preservation of materials and information in written, audio and visual formats that are related to the 1947 Roswell Incident and other unexplained phenomena related to UFO research.',
        owner: 'admin'
    },
    {
        id: '6',
        name: 'St Louis Cemetery No. 1',
        lat: '29.959558781907717',
        lng: '-90.07148621779142',
        category_id: 3,
        description: 'Burial site of voodoo queen Marie Laveau & other historical notables in 18th- & 19th-century vaults.',
        owner: 'admin'
    },
    {
        id: '7',
        name: 'Trans-Allegheny Lunatic Asylum',
        lat: '39.038841478852845',
        lng: '-80.47126017341711',
        category_id: 3,
        description: 'This National Historic Landmark served as a sanctuary for the mentally ill beginning in the mid-1800s. This 160 year old asylum holds fascinating stories of Civil War raids, a gold robbery, the "curative" effects of architecture, and the efforts of determined individuals to help better the lives of the mentally ill. Tour this nationally recognized historic landmark and see how it left a lasting impression on local and national history. We offer a variety of historic and paranormal tours during our season.',
        owner: 'admin' 
    },
    {
        id: '8',
        name: 'Skinwalker Ranch',
        lat: '40.25871560553603',
        lng: '-109.8877792445512',
        category_id: 1,
        description: 'Recognized as the most scientifically studied paranormal hotspot on the planet, Skinwalker Ranch is a 512 acre secure site that has been monitored for decades with armed security and surveillance 24/7/365. This remote location was involved with a Pentagon funded black budget project studying UFO activity, cattle mutilations and strange phenomena, and is also known as a living laboratory for studying other intelligences and possible interdimensional phenomena. Please note that Skinwalker Ranch is closed to the public and does not allow tours.',
        owner: 'admin'
    },
    {
        id: '9',
        name: 'Bridgewater Triangle',
        lat: '41.99185224072833',
        lng: '-70.96988160989879',
        category_id: 2,
        description: 'Located in southeastern Massachusetts is the Bridgewater Triangle, an area of about 200 square miles, that has been the site of legends and curses for centuries, and has been said to be called home to strange phenomena including ghosts, Bigfoot, UFOs, and strange creatures. Roughly bounded by the towns of Rehoboth, Freetown, and Abington, the area includes the Hockomock Swamp Wildlife Management Area and the Freetown-Fall River State Forest.',
        owner: 'admin'
    },
    {
        id: '10',
        name: 'Ghosts of Gettysburg Walking Tours',
        lat: '39.82713802854362',
        lng: '-77.23128918689176',
        category_id: 3,
        description: 'Experience the Ghosts of Gettysburg in one of the most haunted places in the United States. All ghost tours are led by guides in period-dress carrying candlelit lanterns. The tours are comfortably paced walking tours through downtown Gettysburg. Our tours are based on storytelling, combining the history of Gettysburg and the battle that took place here, with mysterious tales of the still lurking dead.',
        owner: 'admin'
    },
    {
        id: '11',
        name: 'Gettysburg, Pennsylvania',
        lat: '39.87518572528092',
        lng: '-77.2238908875531',
        category_id: 3,
        description: 'Gettysburg is considered to be one of the most haunted places in America. The Battle of Gettysburg claimed so many lives and has undoubtedly left its mark on the land, but there have been other deaths and tragedies here too which have led to hauntings.',
        owner: 'admin'
    }
];

const seedAttractions = () => Attraction.bulkCreate(attractionData);

module.exports = seedAttractions;
