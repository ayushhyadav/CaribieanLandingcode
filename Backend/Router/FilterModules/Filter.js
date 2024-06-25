const express =require('express');
const router =express.Router()
const Users = require('../../SignupModule/Signupmodules');


function filterProperties(myARray,filters) {
    return myARray.filter(property => {
        return (
          (!filters.country || property.country === filters.country) &&
          (!filters.city || property.city === filters.city) &&
          (!filters.property_type || property.property_type === filters.property_type) &&
          (!filters.guest_count || parseInt(property.guest_count) >= filters.guest_count) &&
          (!filters.min_price_per_night || parseInt(property.price_per_night) >= filters.min_price_per_night) &&
          (!filters.max_price_per_night || parseInt(property.price_per_night) <= filters.max_price_per_night) &&
          (!filters.select_view || property.select_view === filters.select_view) &&
          (!filters.amenities || property.amenties.includes(filters.amenities)) &&
          (!filters.extra_service || property.extra_service.includes(filters.extra_service))
        );
      });
  }

router.post('/propertys/filter',async (req,res)=>{
    const {country,city,property_type,persion,minimum_budget,maximum_budget,select_view,amenities,extra_service,check_in_date,check_out_date} = req.body
    const filters = {
        country: country,
        city: city,
        property_type: property_type,
        guest_count: persion,
        min_price_per_night: parseInt(minimum_budget),
        max_price_per_night: parseInt(maximum_budget),
        select_view: select_view,
        amenities: amenities,
        extra_service: extra_service
      };
    
      let data = await  Users.find()
      // Downtown,Uptown , Mountains , Beach , River , Ecotourism 
      let myARray = []
      let propertydata = data.filter(item => {
        let stringData = JSON.stringify(item)
        const {_id , ...rest } = JSON.parse(stringData)
        if(rest?.property_list){
           
           myARray.push(rest?.property_list[0])
        }
      })
      const filteredProperties = filterProperties(myARray,filters);
    let result = {
      data:filteredProperties
    }
    res.send({message:result})
 }
  )
module.exports = router