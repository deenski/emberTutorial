export default function() {
  this.namespace='/api';

  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grade Olde Mansion',
          owner: 'Varuca Salt', 
          city: 'San Fransisco',
          category: 'Estate',
          bedrooms: 15,
          image: "https://source.unsplash.com/1080x1920/?mansion",
          description: 'A mucho grande olde mansion.'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living', 
          owner: 'A friendly lady',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://source.unsplash.com/1080x1920/?condo',
          description: 'A charming one bedroom condo in the heart of Seattle, bring a raincoat!'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'An ugly dood',
          city: 'Devner',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://source.unsplash.com/1080x1920/?apartment',
          description: 'All the conveniences of downtown, including zero parking spots within 7 miles!'
        }
      }]
    };
  });
}
