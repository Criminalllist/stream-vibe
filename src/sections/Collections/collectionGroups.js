import categoryItems from "@/sections/Categories/CategoryItems.js";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
        ],
        sliderConfig: {
          slidesPerView: 1.6,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            views: '2k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57m',
            views: '1.5k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10m',
            views: '1.8k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20m',
            views: '3k'
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42m',
            views: '5k'
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            views: '2k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57m',
            views: '1.5k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10m',
            views: '1.8k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20m',
            views: '3k'
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42m',
            views: '5k'
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            views: '2k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57m',
            views: '1.5k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10m',
            views: '1.8k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20m',
            views: '3k'
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42m',
            views: '5k'
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            views: '2k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57m',
            views: '1.5k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10m',
            views: '1.8k'
          },
          {
            title: 'Something on indian',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20m',
            views: '3k'
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42m',
            views: '5k'
          },
        ],
        sliderConfig: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/released/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'War',
            imgSrc: '/src/assets/images/released/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/released/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'Tomorrow war',
            imgSrc: '/src/assets/images/released/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/released/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/released/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'War',
            imgSrc: '/src/assets/images/released/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/released/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'Tomorrow war',
            imgSrc: '/src/assets/images/released/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/released/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/released/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'War',
            imgSrc: '/src/assets/images/released/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/released/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'Tomorrow war',
            imgSrc: '/src/assets/images/released/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/released/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/released/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'War',
            imgSrc: '/src/assets/images/released/2.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/released/3.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'Tomorrow war',
            imgSrc: '/src/assets/images/released/4.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/released/5.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },
        ],
        sliderConfig: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

        ],
        sliderConfig: {
          slidesPerView: 1.6,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ]
  },
  {

    title: 'Shows',
    items: [
      {
        title: 'Our Genres 2',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
        ],
        sliderConfig: {
          slidesPerView: 1.6,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderConfig: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30m',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderConfig: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Must - Watch Shows',
        movieItems: [
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'IDN',
            imgSrc: '/src/assets/images/must-watches/2.jpg',
            duration: '1h 30min',
            rating: {
              value: 4,
              label: '20K'
            }
          },
          {
            title: 'Blade runner',
            imgSrc: '/src/assets/images/must-watches/3.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K'
            }
          },
          {
            title: 'Indian Apollon',
            imgSrc: '/src/assets/images/must-watches/4.jpg',
            duration: '2h 10min',
            rating: {
              value: 4,
              label: '20K'
            }
          },

        ],
        sliderConfig: {
          slidesPerView: 1.6,
          spaceBetween: 20,
          allowTouchMove: true,
          speed: 500,
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              allowTouchMove: false,
            },
            1441: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ]
  },
]

export default collectionGroups;