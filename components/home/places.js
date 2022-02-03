import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { Card, IconButton } from 'react-native-paper';

export default function Toptrips({ navigation, type, search }) {
  const camps = [
    {
      name: 'Acadia National Park, Maine',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t1_acadia_national_park,_maine_158173_mobi.jpg',
      type: 'Camp',
      price: 120,
      rating: 5,
      duration: '5 hours'
    },
    {
      name: 'Arches National Park, Utah',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t2_arches_national_park,_utah_158173_mobi.jpg',
      type: 'Camp',
      price: 110,
      rating: 4.5,
      duration: '5 hours'
    },
    {
      name: 'Assateague Island National Park, Maryland',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t3_assateague_island_national_par_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 4,
      duration: '5 hours'
    },
    {
      name: 'Camping Near Me: Badlands National Park South, Dakota',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t4_badlands_national_park_south,__158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Big Bend National Park, Texas',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t5_big_bend_national_park,_texas_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Cayo Costa State Park, Florida',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t6_cayo_costa_state_park,_florida_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Del Norte Coast Redwoods State Park, California',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t7_del_norte_coast_redwoods_state_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Camping Near Me: Denali National Park, Alaska',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t8_denali_national_park,_alaska_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Camping Near Me: Devils Fork State Park, South Carolina',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t9_devils_fork_state_park,_south__158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Camping Near Me: Everglades National Park, Florida',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t10_everglades_national_park,_flor_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Tent Camping Near Me: Glacier National Park, Montana',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t11_glacier_national_park,_montana_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Camping Near Me: Green Mountain National Forest, Vermont',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/t-t12_green_mountain_national_forest_158173_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Hawaii Volcanoes National Park, Hawaii',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g13_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Tent Camping Near Me: Joshua Tree National Park, California',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g14_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Tent Camping Near Me: Kaibab National Forest, Arizona',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g15_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Lake McConaughy, Nebraska',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g16_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Ludington State Park, Michigan',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g17_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Best Tent Camping Near Me: Minnewaska State Park Preserve, New York',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g18_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Monument Valley Navajo Tribal Park, Utah',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g19_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Best Tent Camping Near Me: Olympic National Park, Washington',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g20_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Best Tent Camping Near Me: Pictured Rocks National Lakeshore, Michigan',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g21_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Pine Grove Furnace State Park, Pennsylvania',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g22_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Best Tent Camping Near Me: Shenandoah National Park, Virginia',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g23_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'White Mountain National Forest, New Hampshire-Maine',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g24_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Best Tent Camping Near Me: Wyalusing Hardwood Forest, Wisconsin',
      url: 'https://vacationidea.com/pix/img25Hy8R/articles/best-tent-camping-usa_g25_mobi.jpg',
      type: 'Camp',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
  ];

  const mountains = [
    {
      name: 'Four Seasons Resort and Residences Jackson Hole',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/the-handle-bar-v7780548-1440-300x200.jpg',
      type: 'Mountain',
      price: 100,
      rating: 5,
      duration: '5 hours'
    },
    {
      name: 'Viceroy Snowmass',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2020/02/the-hotel-v1263038-90-nw-2000-300x200.jpg',
      type: 'Mountain',
      price: 95,
      rating: 4.5,
      duration: '5 hours'
    },
    {
      name: 'The Broadmoor',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/main-entrance-v9877275-1440-300x200.jpg',
      type: 'Mountain',
      price: 90,
      rating: 4,
      duration: '5 hours'
    },
    {
      name: 'JW Marriott Tucson Starr Pass Resort & Spa',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/main-pool-v18545913-1440-300x200.jpg',
      type: 'Mountain',
      price: 95,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Waldorf Astoria Park City',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v16061852-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Four Seasons Resort and Residences Vail',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v16574510-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Park Hyatt Beaver Creek Resort and Spa',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/main-lobby-v7760735-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'One Ski Hill Place, A RockResort',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/lobby-v15370470-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Arrabelle at Vail Square, A RockResort',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/lobby-v16570992-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'The Sebastian – Vail',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v7760122-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Garden of the Gods Resort and Club',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v9877688-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'The Westin Riverfront Resort & Spa, Avon, Vail Valley',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/two-bedroom-suite-v1919534-82-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Highmark Steamboat Springs by Mountain Resorts',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/four-bedroom-apartment-with-three-bathro-v9327837-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'The Ritz-Carlton, Lake Tahoe',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35//2019/05/lobby-v1417800-95-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Grand Lodge on Peak 7',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/outdoor-pool-v8352927-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'The Whiteface Lodge',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/lobby-v4231898-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Four Seasons Resort Rancho Encantado Santa Fe',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/the-hotel-v1419641-35-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'The Lodge at Spruce Peak',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v17670218-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Montage Deer Valley',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2020/02/alpine-two-bedroom-suite-v1092508-94-nw-2000-1-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Cable Mountain Lodge',
      url: 'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v6500613-1440-300x200.jpg',
      type: 'Mountain',
      price: 80,
      rating: 3.5,
      duration: '5 hours'
    },
  ];

  const beaches = [
    {
      name: 'Maui',
      url: 'https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg',
      type: 'Beach',
      price: 200,
      rating: 5,
      duration: '5 hours'
    },
    {
      name: 'Kauai',
      url: 'https://travel.usnews.com/dims4/USNEWS/63137a8/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-155150590_XEX2Eun.jpg',
      type: 'Beach',
      price: 180,
      rating: 4.5,
      duration: '5 hours'
    },
    {
      name: 'Sanibel Island',
      url: 'https://travel.usnews.com/dims4/USNEWS/db19b1e/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/bowmans_resize_445x280_0ziKSdo.jpg',
      type: 'Beach',
      price: 150,
      rating: 4,
      duration: '5 hours'
    },
    {
      name: 'Destin',
      url: 'https://travel.usnews.com/dims4/USNEWS/5d84bb5/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main-2016_445x280_RUDrE3A.jpg',
      type: 'Beach',
      price: 120,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Laguna Beach',
      url: 'https://travel.usnews.com/dims4/USNEWS/c4c0c80/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-629986702_445x280_nEwR43I.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Outer Banks',
      url: 'https://travel.usnews.com/dims4/USNEWS/11f833d/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_JRydtwn.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/9fc5312/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_POw1UEr.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Naples',
      url: 'https://travel.usnews.com/dims4/USNEWS/b7fa015/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/naples_pier_cropped_445x280_sAVZS8b.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Miami Beach',
      url: 'https://travel.usnews.com/dims4/USNEWS/5ec4e4b/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/ocean_drive2_edit_getty_tetra_images_445x280_DbMVF1B.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Monterey',
      url: 'https://travel.usnews.com/dims4/USNEWS/e3c3d49/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_cropped_445x280_bU18JGH.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Key West',
      url: 'https://travel.usnews.com/dims4/USNEWS/be50ac2/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/key_west_new_main_photo_cropped_445x280_kC5qI5f.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/73cf3c6/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/thinkstock_-_bald_head_island1_445x280_6UzGd75.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/635c824/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_Nz2Bd5k.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'St. Petersburg, FL',
      url: 'https://travel.usnews.com/dims4/USNEWS/d4a354a/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_445x280_y78NCgi.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Huntington Beach',
      url: 'https://travel.usnews.com/dims4/USNEWS/b7209b1/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/Huntington_Beach_W1oKGcg.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'St. Augustine',
      url: 'https://travel.usnews.com/dims4/USNEWS/484cc63/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/city_hall_cropped_445x280_9LaQKov.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Cape May',
      url: 'https://travel.usnews.com/dims4/USNEWS/6075455/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/beach_w6QkuwW.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Hilton Head',
      url: 'https://travel.usnews.com/dims4/USNEWS/6207faf/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/hh_edited_new_pic_getty_sean_pavone_445x280_lWrnOmj.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/9363157/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_7S9JvqM.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Nantucket',
      url: 'https://travel.usnews.com/dims4/USNEWS/e46108e/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/brant_point_light_house-2015main_445x280_m10zbsd.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Big Sur',
      url: 'https://travel.usnews.com/dims4/USNEWS/71bf756/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/151358356_445x280_vKCpzhb.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Kennebunkport',
      url: 'https://travel.usnews.com/dims4/USNEWS/a666519/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/goose_rocks_beach_41_445x280_W9ZsapT.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/35a8edd/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_9JvbGny.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Cape Cod',
      url: 'https://travel.usnews.com/dims4/USNEWS/0a2f03e/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_32715_eTq0Jhh.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Santa Monica',
      url: 'https://travel.usnews.com/dims4/USNEWS/99cf1c0/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-491452485_445x280_OrKrgJj.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/549f7f1/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_i24H1vz.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'undefined',
      url: 'https://travel.usnews.com/dims4/USNEWS/8269043/2147483647/resize/445x280^>/crop/445x280/quality/85/?url=https://travel.usnews.com/images/westtexasfish_-_boca_chica1_445x280_bOtkJWT.jpg',
      type: 'Beach',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
  ];

  const forests = [
    {
      name: 'Tongass National Forest, Alaska',
      url: 'https://media.timeout.com/images/105669731/750/562/image.jpg',
      type: 'Forest',
      price: 180,
      rating: 5,
      duration: '5 hours'
    },
    {
      name: 'Bridger-Teton National Forest, Wyoming',
      url: 'https://media.timeout.com/images/105669737/750/562/image.jpg',
      type: 'Forest',
      price: 170,
      rating: 4.5,
      duration: '5 hours'
    },
    {
      name: 'Superior National Forest, Minnesota',
      url: 'https://media.timeout.com/images/105669747/750/562/image.jpg',
      type: 'Forest',
      price: 150,
      rating: 4,
      duration: '5 hours'
    },
    {
      name: 'Cibola National Forest, New Mexico',
      url: 'https://media.timeout.com/images/105669735/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Sierra National Forest, California',
      url: 'https://media.timeout.com/images/105669748/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Pisgah and Nantahala National Forests, North Carolina',
      url: 'https://media.timeout.com/images/105669732/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'White Mountain National Forest, New Hampshire',
      url: 'https://media.timeout.com/images/105669734/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Dixie National Forest, Utah',
      url: 'https://media.timeout.com/images/105669729/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Green Mountain National Forest, Vermont',
      url: 'https://media.timeout.com/images/105669751/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
    {
      name: 'Washington and Jefferson National Forests, Virginia',
      url: 'https://media.timeout.com/images/105669752/750/562/image.jpg',
      type: 'Forest',
      price: 100,
      rating: 3.5,
      duration: '5 hours'
    },
  ];

  let data = type !== "" ? [...camps, ...mountains, ...beaches, ...forests].filter((item) => item.type == type) : [...camps, ...mountains, ...beaches, ...forests];

  if (search !== "")
    data = [...camps, ...mountains, ...beaches, ...forests].filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <View>
      <FlatList
        // vetical
        horizontal
        // numColumns="2"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', {item}) } activeOpacity={1}>
            {/*<View style={{ backgroundColor: 'white', flexDirection: "row", alignItems: 'space-between', marginVertical: 5, marginRight: 5, marginLeft: 5, paddingHorizontal: 5, shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, shadowOpacity: 0.15, elevation: 8, borderRadius: 5, }}>
              <Image style={styles.cimage} source={item["categoryimage"]} />
              <Text style={{ alignSelf: 'center', paddingRight: 10, fontFamily: 'verdana' }}>{item["categoryname"]}</Text>
            </View>*/}
            <View style={styles.item}>
              <View style={{
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 6,
                shadowOpacity: 0.4,
                elevation: 10,
                borderRadius: 10
              }}>
                <Image
                  source={{
                    uri: item.url,
                  }}
                  style={styles.itemPhoto}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={styles.itemText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={styles.itemCategory}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item.type}
                </Text>
                <IconButton
                  key={item.name}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 50,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 6,
                    shadowOpacity: 0.15,
                    elevation: 8,
                  }}
                  icon={'heart-outline'}
                  size={16}
                  onPress={() => console.log(`You Pressed ${item.name} button`)}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}

        // ListFooterComponent={(
        //   <View style={{flex: 1, height: 60, width: '100%'}}>
        //   </View>
        // )}

        style={{
          // marginLeft: -5,
          // marginRight: -5,
          // paddingLeft: 5,
          marginTop: 5,
          // backgroundColor: 'red',
          alignItems: 'center',
          // paddingBottom: 150,
          height: '45%',
          paddingBottom: 50,
          marginBottom: 30
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // margin: 10,
    // width: '50%'
    borderRadius: 10,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width / 2 - 40,
    marginBottom: 20,
    padding: 5,

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  itemPhoto: {
    width: Dimensions.get('window').width / 2 - 50,
    height: Dimensions.get('window').width / 2 - 50,
    borderRadius: 10,
    shadowColor: 'black',

    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 10,
  },
  itemText: {
    color: 'black',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width / 2 - 40,
    paddingTop: 5,
    fontFamily: 'verdana',
    fontSize: 12,
    fontWeight: 'bold',
    paddingRight: 5
    // marginTop: 5,
  },
  itemCategory: {
    fontFamily: 'verdana',
    fontSize: 10,
    color: '#999',
    marginBottom: 5,
  },
});
