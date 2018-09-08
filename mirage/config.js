export default function() {
  this.namespace='/api';

  let rentals = [{
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
      title: 'Grade Olde Mansion',
      owner: 'Varuca Salt', 
      city: 'San Fransisco',
      category: 'Estate',
      bedrooms: 15,
      image: "https://source.unsplash.com/1920x1080/?mansion",
      description: 'An extravagent house with very little actual purpose other than gradure and ego.'
    }
    } , {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
      title: 'Urban Living', 
      owner: 'A friendly lady',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://source.unsplash.com/1920x1080/?condo',
      description: 'A charming one bedroom condo in the heart of Seattle, bring a raincoat!'
    }
  }, {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
      title: 'Downtown Charm',
      owner: 'An ugly dood',
      city: 'Denver',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://source.unsplash.com/1920x1080/?apartment',
      description: 'All the conveniences of downtown, including zero parking spots within 7 miles!'
    }
  }];
  
  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}
