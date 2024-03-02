```javascript
let data = {

  // Below is a sample restaurant object
  restaurants: [
    {
      name: 'GYG';
      cuisine: 'Mexican';
      location: 'University Terraces Lower Kensington Campus, High St, Kensington NSW 2052';
      operating_hours: '10am-5pm';
      phone: '03432212112';
      website: 'https://www.guzmanygomez.com.au/';
      description: 'Great mexican good gg'
      reviews: [
        {
            reviewTitle: 'Value for money';
            reviewer: 'Koushik';
            rating: 4;
            like: 0;
        
            categories: {
            quality: 4;
            price: 3;
            service: 5;
            };
        
            reviewText: 'Great Food Innit!!';
            images: [
                'somerandomimage',
            ]; // Assuming images will be stored as URLs
        },
      ]
    },
  ],

  // Below is a sample dashboard view object
  dashboard_view: [
    {
      title:  'Guzman Y Gomez',
      id: 987654321,
      image: [
        'somerandomimage',
      ],
      cuisine: 'Mexican'
      location: 'University Terraces Lower Kensington Campus, High St, Kensington NSW 2052'
      reviews:
        {
            average_stars: 4;
            num_reviews: 60;
        }
    },
  ],

};